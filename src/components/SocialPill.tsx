import React, { ReactNode } from "react";

interface SocialPillProps {
  children: ReactNode;
  href: string;
}

export default function SocialPill({ children, href }: SocialPillProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      role="link"
      className="inline-flex items-center justify-center gap-2 px-4 py-1 text-md group max-w-fit transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_6px_#00f6ff]"
      href={href}
    >
      {children}
    </a>
  );
}
