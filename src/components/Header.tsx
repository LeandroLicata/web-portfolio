"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  {
    title: "Inicio",
    label: "home",
    url: "/#home",
  },
  {
    title: "Proyectos",
    label: "projects",
    url: "/#projects",
  },
  {
    title: "Sobre mí",
    label: "about-me",
    url: "/#about-me",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-10 w-full mx-auto transition-all text-white ${
        scrolled ? "bg-gray-800/90" : "bg-none"
      }`}
    >
      <nav className="flex items-center justify-center px-3 py-2 text-sm font-medium rounded-full">
        {navItems.map((link) => (
          <Link
            key={link.label}
            className="relative block px-2 py-2 transition hover:text-light-blue"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
