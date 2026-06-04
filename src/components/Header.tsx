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
    title: "Experiencia",
    label: "experience",
    url: "/#experience",
  },
  {
    title: "Educación",
    label: "education",
    url: "/#education",
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
  const [menuOpen, setMenuOpen] = useState(false);

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
        scrolled || menuOpen
          ? "bg-background-from/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-4 py-2 md:justify-center">
        {/* Desktop nav */}
        <ul className="items-center hidden md:flex">
          {navItems.map((link) => (
            <li key={link.label}>
              <Link
                className="relative block px-3 py-2 text-2xl font-medium transition-colors duration-200 hover:text-accent-green"
                aria-label={link.label}
                href={link.url}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="flex flex-col items-center justify-center w-10 h-10 gap-1.5 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <ul
        className={`flex flex-col overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((link) => (
          <li key={link.label}>
            <Link
              className="block px-4 py-3 text-xl font-medium transition-colors duration-200 hover:text-accent-green"
              aria-label={link.label}
              href={link.url}
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
