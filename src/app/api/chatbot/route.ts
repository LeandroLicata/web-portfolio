import { NextRequest, NextResponse } from "next/server";

const GENERIC_ERROR = "Ocurrió un error al enviar el mensaje.";

export async function POST(req: NextRequest) {
  const webhook = process.env.CHATBOT_WEBHOOK;

  if (!webhook) {
    console.error("[chatbot] falta la variable de entorno CHATBOT_WEBHOOK");
    return NextResponse.json({ reply: GENERIC_ERROR }, { status: 500 });
  }

  try {
    const { userMessage } = await req.json();

    if (typeof userMessage !== "string" || !userMessage.trim()) {
      return NextResponse.json(
        { reply: "El mensaje está vacío." },
        { status: 400 }
      );
    }

    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage }),
    });

    // Make.com responde texto plano cuando el escenario falla ("Scenario failed
    // to complete"), así que se lee como texto y recién después se intenta
    // parsear. Hacer res.json() directo tira un SyntaxError que esconde la
    // causa real.
    const raw = await res.text();

    if (!res.ok) {
      console.error(`[chatbot] el webhook respondió ${res.status}:`, raw);
      return NextResponse.json({ reply: GENERIC_ERROR }, { status: 502 });
    }

    let data: { reply?: string };
    try {
      data = JSON.parse(raw);
    } catch {
      console.error("[chatbot] el webhook no devolvió JSON:", raw.slice(0, 200));
      return NextResponse.json({ reply: GENERIC_ERROR }, { status: 502 });
    }

    if (!data.reply) {
      console.error("[chatbot] la respuesta no trae 'reply':", raw.slice(0, 200));
      return NextResponse.json({ reply: GENERIC_ERROR }, { status: 502 });
    }

    return NextResponse.json({ reply: data.reply });
  } catch (error) {
    console.error("[chatbot] no se pudo contactar el webhook:", error);
    return NextResponse.json({ reply: GENERIC_ERROR }, { status: 502 });
  }
}
