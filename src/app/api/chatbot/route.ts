import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "@google/genai";
import {
  streamReply,
  MissingApiKeyError,
  type ChatMessage,
} from "@/lib/chatbot/provider";
import { SITE } from "@/lib/site";

// Node y no Edge: el runtime de Edge no aporta nada acá y Node deja usar el
// SDK sin sorpresas.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_TURNS = 20;
const MAX_CHARS = 500;

const GENERIC_ERROR =
  `Se me complicó responder. Escribile directo a ${SITE.email}.`;
const BUSY_ERROR =
  `Estoy recibiendo muchas consultas y llegué al límite gratuito por ahora. ` +
  `Probá en un rato o escribile a ${SITE.email}.`;

// Rate limit best-effort: el estado vive en memoria del proceso, así que en
// serverless cada instancia lleva su propia cuenta. Alcanza para frenar el
// F5 sostenido de una sola pestaña; el techo real de gasto lo pone el free
// tier de Gemini, que devuelve 429 en vez de facturar.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Poda perezosa para que el Map no crezca sin techo.
  if (hits.size > 1000) {
    hits.forEach((times, key) => {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    });
  }

  return recent.length > MAX_REQUESTS;
}

function parseMessages(body: unknown): ChatMessage[] | null {
  if (typeof body !== "object" || body === null) return null;
  const { messages } = body as { messages?: unknown };
  if (!Array.isArray(messages) || messages.length === 0) return null;
  if (messages.length > MAX_TURNS) return null;

  const parsed: ChatMessage[] = [];
  for (const raw of messages) {
    if (typeof raw !== "object" || raw === null) return null;
    const { role, text } = raw as { role?: unknown; text?: unknown };
    if (role !== "user" && role !== "model") return null;
    if (typeof text !== "string") return null;
    const trimmed = text.trim();
    if (!trimmed || trimmed.length > MAX_CHARS) return null;
    parsed.push({ role, text: trimmed });
  }

  // La conversación tiene que arrancar y terminar en el visitante.
  if (parsed[0].role !== "user") return null;
  if (parsed[parsed.length - 1].role !== "user") return null;

  return parsed;
}

function textError(message: string, status: number) {
  return new NextResponse(message, {
    status,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "local";
  if (rateLimited(ip)) return textError(BUSY_ERROR, 429);

  let messages: ChatMessage[] | null;
  try {
    messages = parseMessages(await req.json());
  } catch {
    messages = null;
  }
  if (!messages) return textError("Mensaje inválido.", 400);

  try {
    const chunks = await streamReply(messages, req.signal);

    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk));
          }
        } catch (error) {
          // El stream ya empezó: no se puede cambiar el status, así que se
          // cierra con una nota visible en lugar de cortar en seco.
          console.error("[chatbot] el stream se cortó:", error);
          controller.enqueue(encoder.encode(`\n\n[${GENERIC_ERROR}]`));
        } finally {
          controller.close();
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    if (error instanceof MissingApiKeyError) {
      console.error("[chatbot] falta la variable de entorno GEMINI_API_KEY");
      return textError(GENERIC_ERROR, 500);
    }
    if (error instanceof ApiError) {
      console.error(`[chatbot] Gemini respondió ${error.status}:`, error.message);
      // 429 = cuota del free tier agotada. Es el modo de falla esperado.
      return textError(error.status === 429 ? BUSY_ERROR : GENERIC_ERROR, 502);
    }
    console.error("[chatbot] fallo inesperado:", error);
    return textError(GENERIC_ERROR, 502);
  }
}
