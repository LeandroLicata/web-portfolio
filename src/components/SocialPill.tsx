import React, { ReactNode } from "react";

interface SocialPillProps {
  children: ReactNode;
  href?: string;
  title?: string;
  onClick?: () => void;
}

const pillClass =
  "inline-flex items-center justify-center gap-2 px-4 py-1 text-base group max-w-fit transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_6px_#00f6ff]";

export default function SocialPill({
  children,
  href,
  title,
  onClick,
}: SocialPillProps) {
  if (onClick) {
    return (
      <button onClick={onClick} title={title} className={pillClass}>
        {children}
      </button>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={pillClass}
      href={href}
    >
      {children}
    </a>
  );
}
