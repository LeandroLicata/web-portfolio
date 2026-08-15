"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypingEffect({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
          if (displayText.length === currentFullText.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
            return;
          }
        } else {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  // El texto más largo de la lista, usado como molde invisible.
  const longest = texts.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="inline-grid">
      {/*
        Reserva el espacio del texto más largo. Sin esto el párrafo cambia de
        alto mientras se escribe —pasa de uno a dos renglones— y ese salto
        empuja hacia abajo todas las secciones siguientes.
        Ambos hijos comparten la misma celda del grid, así que se superponen y
        la caja siempre mide lo que mide el molde.
      */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {longest}▌
      </span>
      <span className="col-start-1 row-start-1">
        {displayText}
        <span aria-hidden="true" className="animate-pulse text-accent-blue">
          ▌
        </span>
      </span>
    </span>
  );
}
