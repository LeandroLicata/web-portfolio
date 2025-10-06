"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Ocurrió un error al enviar el mensaje." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Botón flotante cuando está cerrado */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-accent-pink text-accent-blue shadow-lg hover:scale-105 transition-all flex items-center justify-center border border-accent-blue/40"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {/* Ventana del chatbot */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 w-80 bg-gradient-to-b from-background-from to-background-to border border-border-soft shadow-[0_0_15px_theme(colors.accent.blue/50)] font-[VT323] text-[1.1rem] text-accent-blue backdrop-blur-md flex flex-col overflow-hidden transition-all duration-300`}
        >
          {/* HEADER */}
          <div className="p-3 border-b border-border-soft text-center font-bold uppercase tracking-wider text-accent-pink flex justify-between items-center">
            <span>Chatbot</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-accent-blue hover:text-accent-pink transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* MENSAJES */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-96 scrollbar-thin scrollbar-thumb-accent-blue/40 scrollbar-track-transparent">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] p-2 px-3 border ${
                  msg.sender === "user"
                    ? "bg-accent-blue/10 text-accent-blue border-accent-blue/40 self-end ml-auto"
                    : "bg-accent-pink/10 text-accent-pink border-accent-pink/40"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-sm text-text-secondary italic">
                Escribiendo...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div className="flex items-center p-2 border-t border-border-soft">
            <input
              type="text"
              placeholder="Escribí un mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 min-w-0 bg-transparent text-accent-blue placeholder-accent-blue/60 border border-border-soft p-2 outline-none focus:border-accent-pink/70 transition-colors"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="ml-1 px-2 py-1.5 bg-accent-pink/30 hover:bg-accent-pink/50 text-accent-blue border border-accent-pink/50 transition-all disabled:opacity-50 text-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
