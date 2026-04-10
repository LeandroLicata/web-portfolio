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

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-accent-blue">▌</span>
    </span>
  );
}
