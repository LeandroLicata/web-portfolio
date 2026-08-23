"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE } from "@/lib/site";

type Message = {
  role: "user" | "model";
  text: string;
};

const STORAGE_KEY = "chatbot:history";
// El servidor corta en 20; se frena antes para que el visitante vea el aviso
// en vez de un 400.
const MAX_TURNS = 18;
const MAX_CHARS = 500;

const GREETING =
  "Soy el asistente de este portfolio. Preguntame lo que quieras sobre la experiencia de Leandro.";

const SUGGESTIONS = [
  "¿En qué trabajó en Olalingo?",
  "¿Tiene experiencia con NestJS?",
  "¿Está disponible para trabajo remoto?",
];

function loadHistory(): Message[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Message[]) : [];
  } catch {
    return [];
  }
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // sessionStorage no existe en el render del servidor, así que la carga va
  // en un efecto y no en el estado inicial.
  useEffect(() => setMessages(loadHistory()), []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Modo incógnito o storage lleno: la conversación no sobrevive al
      // reload. No es motivo para romper el widget.
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const history: Message[] = [...messages, { role: "user", text: trimmed }];
      setMessages(history);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch("/api/chatbot", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
        });

        if (!res.ok || !res.body) {
          const detail = await res.text();
          setMessages([
            ...history,
            {
              role: "model",
              text: detail || `Algo falló. Escribile a ${SITE.email}.`,
            },
          ]);
          return;
        }

        // Se agrega la burbuja vacía y se va rellenando con el stream.
        setMessages([...history, { role: "model", text: "" }]);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages([...history, { role: "model", text: acc }]);
        }
      } catch (error) {
        console.error(error);
        setMessages([
          ...history,
          {
            role: "model",
            text: `No pude conectarme. Escribile a ${SITE.email}.`,
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading]
  );

  const reachedLimit = messages.length >= MAX_TURNS;
  const showSuggestions = messages.length === 0 && !loading;

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir el asistente del portfolio"
          className="fixed bottom-6 right-6 w-14 h-14 bg-accent-pink text-accent-blue shadow-lg hover:scale-105 transition-all flex items-center justify-center border border-accent-blue/40"
        >
          <MessageCircle size={26} aria-hidden="true" />
        </button>
      )}

      {isOpen && (
        <div
          role="dialog"
          aria-label="Asistente del portfolio"
          className="fixed bottom-6 right-6 w-80 max-w-[calc(100vw-3rem)] bg-gradient-to-b from-background-from to-background-to border border-border-soft shadow-[0_0_15px_theme(colors.accent.blue/50)] font-[VT323] text-[1.1rem] text-accent-blue backdrop-blur-md flex flex-col overflow-hidden transition-all duration-300"
        >
          <div className="p-3 border-b border-border-soft font-bold uppercase tracking-wider text-accent-pink flex justify-between items-center">
            <span>Chatbot</span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar el asistente"
              className="text-accent-blue hover:text-accent-pink transition-colors"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <div
            role="log"
            aria-live="polite"
            aria-atomic="false"
            className="flex-1 overflow-y-auto p-3 space-y-3 max-h-96 scrollbar-thin scrollbar-thumb-accent-blue/40 scrollbar-track-transparent"
          >
            <p className="text-text-secondary">{GREETING}</p>

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] p-2 px-3 border whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-accent-blue/10 text-accent-blue border-accent-blue/40 ml-auto"
                    : "bg-accent-pink/10 text-accent-pink border-accent-pink/40"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {showSuggestions && (
              <ul className="space-y-2 pt-1">
                {SUGGESTIONS.map((q) => (
                  <li key={q}>
                    <button
                      onClick={() => send(q)}
                      className="w-full text-left p-2 px-3 border border-border-soft text-text-secondary hover:border-accent-blue/60 hover:text-accent-blue transition-colors"
                    >
                      {q}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {loading && (
              <p className="text-sm text-text-secondary italic">Escribiendo…</p>
            )}

            {reachedLimit && (
              <p className="text-sm text-text-secondary italic">
                Se hizo larga la charla. Para seguir, escribile a {SITE.email}.
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center p-2 border-t border-border-soft"
          >
            <label htmlFor="chatbot-input" className="sr-only">
              Escribí tu pregunta
            </label>
            <input
              id="chatbot-input"
              ref={inputRef}
              type="text"
              maxLength={MAX_CHARS}
              placeholder="Escribí un mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={reachedLimit}
              className="flex-1 min-w-0 bg-transparent text-accent-blue placeholder-accent-blue/60 border border-border-soft p-2 outline-none focus:border-accent-pink/70 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || reachedLimit || !input.trim()}
              className="ml-1 px-2 py-1.5 bg-accent-pink/30 hover:bg-accent-pink/50 text-accent-blue border border-accent-pink/50 transition-all disabled:opacity-50 text-sm"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
}
