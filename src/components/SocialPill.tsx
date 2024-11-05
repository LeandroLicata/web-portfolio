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
      className="inline-flex items-center justify-center gap-2 px-4 py-1 text-blue-neon text-md group max-w-fit hover:text-pink hover:scale-125"
      href={href}
    >
      {children}
    </a>
  );
}
