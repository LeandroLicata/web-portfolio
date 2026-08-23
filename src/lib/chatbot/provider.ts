import { GoogleGenAI, ThinkingLevel, type Content } from "@google/genai";
import { SYSTEM_PROMPT } from "./knowledge";

export type ChatMessage = {
  role: "user" | "model";
  text: string;
};

// Flash-Lite alcanza de sobra: el contexto entra completo en el prompt y la
// tarea es responder preguntas sobre él. Es además el que más margen deja en
// el free tier. Se puede subir a gemini-3.5-flash con la env var.
const MODEL = process.env.GEMINI_MODEL ?? "gemini-3.5-flash-lite";

// Ojo al cambiar de modelo: no todos aceptan los mismos niveles. flash-lite
// admite MINIMAL, pero gemini-3.7-flash solo LOW/MEDIUM/HIGH y rechaza
// MINIMAL con un 400. Por eso va junto al modelo en la config.
const THINKING_LEVEL =
  (process.env.GEMINI_THINKING_LEVEL as ThinkingLevel | undefined) ??
  ThinkingLevel.MINIMAL;

export class MissingApiKeyError extends Error {}

/**
 * Única pieza atada a Google. Si algún día se cambia de proveedor, se
 * reimplementa `streamReply` y el resto de la app no se entera.
 */
export async function streamReply(
  messages: ChatMessage[],
  signal?: AbortSignal
): Promise<AsyncGenerator<string>> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new MissingApiKeyError("falta GEMINI_API_KEY");

  const ai = new GoogleGenAI({ apiKey });

  const contents: Content[] = messages.map((m) => ({
    role: m.role,
    parts: [{ text: m.text }],
  }));

  const stream = await ai.models.generateContentStream({
    model: MODEL,
    contents,
    config: {
      systemInstruction: SYSTEM_PROMPT,
      maxOutputTokens: 500,
      temperature: 0.3,
      // Los Gemini 3.x razonan por defecto. Para responder preguntas sobre un
      // CV que ya está entero en el prompt no aporta nada y consume cuota.
      thinkingConfig: { thinkingLevel: THINKING_LEVEL },
      abortSignal: signal,
    },
  });

  return (async function* () {
    for await (const chunk of stream) {
      const text = chunk.text;
      if (text) yield text;
    }
  })();
}
