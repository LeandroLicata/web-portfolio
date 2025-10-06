import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userMessage } = await req.json();

    const res = await fetch(process.env.CHATBOT_WEBHOOK!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage }),
    });

    const data = await res.json();
    return NextResponse.json({ reply: data.reply || "No response." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      reply: "Ocurrió un error al enviar el mensaje.",
    });
  }
}
