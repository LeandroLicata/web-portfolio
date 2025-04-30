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
      className={`fixed top-0 z-10 w-full mx-auto transition-all text-accent-blue ${
        scrolled ? "bg-background-from/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-center px-3 py-2 text-2xl font-medium rounded-full">
        {navItems.map((link) => (
          <Link
            key={link.label}
            className="relative block px-3 py-2 transition-colors duration-200 hover:text-accent-pink"
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
