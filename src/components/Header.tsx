"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { title: "Inicio", label: "hero", url: "/#hero" },
  { title: "Experiencia", label: "experience", url: "/#experience" },
  { title: "Educación", label: "education", url: "/#education" },
  { title: "Stack", label: "skills", url: "/#skills" },
  { title: "Proyectos", label: "projects", url: "/#projects" },
  { title: "Sobre mí", label: "about-me", url: "/#about-me" },
  { title: "Contacto", label: "contact", url: "/#contact" },
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
                className="relative block px-2 py-2 text-xl font-medium transition-colors duration-200 lg:px-3 lg:text-2xl hover:text-accent-green"
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
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
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

      {/*
        Menú mobile. Anima con grid-rows 0fr → 1fr en vez de max-height, así se
        despliega hasta el alto real del contenido. Con una max-height fija hay
        que adivinar el número, y los 7 ítems ya se pasaban de `max-h-96`: el
        último quedaba recortado. El hijo necesita `min-h-0` para poder colapsar.
      */}
      <div
        className={`grid overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        {/*
          El espacio de abajo va en el último <li>, no como padding del <ul>:
          el padding del contenedor sobrevive al colapso de la fila y dejaría
          24px muertos en el header con el menú cerrado.
        */}
        <ul className="flex min-h-0 flex-col overflow-hidden">
          {navItems.map((link) => (
            <li key={link.label} className="last:pb-6">
              <Link
                className="block px-4 py-3 text-xl font-medium transition-colors duration-200 hover:text-accent-green"
                href={link.url}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
