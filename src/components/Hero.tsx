"use client";

import SocialPill from "./SocialPill";
import TVEffect from "./TVEffect";

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
  {
    href: "/documents/Leandro_Licata_CV_2025.pdf",
    iconSrc: "/icons/cv.png",
    label: "Currículum",
  },
];

export default function Hero() {
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

        <nav className="flex flex-wrap gap-4 mt-8">
          {socialLinks.map(({ href, iconSrc, label }) => (
            <SocialPill href={href} key={label}>
              <img src={iconSrc} alt={label} className="w-9" />
            </SocialPill>
          ))}
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
