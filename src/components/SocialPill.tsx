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
      className="inline-flex items-center justify-center gap-2 px-4 py-1 text-white transition bg-gray-800 border border-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
      href={href}
    >
      {children}
    </a>
  );
}
