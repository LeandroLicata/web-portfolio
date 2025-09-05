"use client";

import { useState } from "react";
import SocialPill from "./SocialPill";

const socialLinks = [
  {
    href: "mailto:leandrolicata1@gmail.com",
    iconSrc: "/icons/mail.png",
    label: "Mail",
  },
  {
    href: "https://linkedin.com/in/leandro-licata",
    iconSrc: "/icons/linkedin.png",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/LeandroLicata",
    iconSrc: "/icons/github.png",
    label: "Github",
  },
];

export default function Hero() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-between pt-4 lg:pt-0">
      <div className="max-w-xl flex-1">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-accent-blue">
          Hola, soy Leandro Licata
        </h1>

        <p className="mt-6 text-xl text-text-secondary [&>span]:text-accent-pink">
          <span>Desarrollador Web Full Stack </span> de Mendoza, Argentina,
          especializado en la creación de aplicaciones web con{" "}
          <span>React</span>. Mi framework favorito es <span>Next.js</span> y
          tengo sólidos conocimientos en <span>Node.js</span>,{" "}
          <span>PostgreSQL</span> y <span>MongoDB</span>.
        </p>

        <nav className="flex flex-wrap gap-4 mt-8 relative">
          {socialLinks.map(({ href, iconSrc, label }) => (
            <SocialPill href={href} key={label}>
              <img src={iconSrc} alt={label} className="w-9" />
            </SocialPill>
          ))}

          {/* Dropdown para CV */}
          <div className="relative">
            <SocialPill onClick={() => setDropdownOpen(!dropdownOpen)}>
              <img src="/icons/cv.png" alt="CV" className="w-9" />
            </SocialPill>

            {dropdownOpen && (
              <div className="absolute mt-2 right-0 bg-white border border-border-soft rounded shadow-lg flex flex-col z-10">
                <a
                  href="/documents/Leandro_Licata_CV_ES.pdf"
                  target="_blank"
                  className="px-4 py-2 hover:bg-accent-blue/10"
                >
                  CV (ES)
                </a>
                <a
                  href="/documents/Leandro_Licata_CV_EN.pdf"
                  target="_blank"
                  className="px-4 py-2 hover:bg-accent-blue/10"
                >
                  CV (EN)
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>

      <img
        src="/images/avatar.png"
        alt="avatar"
        className="w-auto h-72 hidden lg:block border border-border-soft shadow-lg"
      />
    </div>
  );
}
