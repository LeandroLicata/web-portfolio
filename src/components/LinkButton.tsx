import React, { ReactNode } from "react";

interface LinkButtonProps {
  children: ReactNode;
  href: string;
}

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <a
      href={href}
      role="link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1 text-sm font-mono text-white border border-white rounded-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_8px_1px_rgba(0,255,255,0.6)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
    >
      {children}
    </a>
  );
}
