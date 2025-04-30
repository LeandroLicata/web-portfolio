"use client";

import SocialPill from "./SocialPill";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const socialLinks = [
  { href: "mailto:leandrolicata1@gmail.com", icon: FiMail, label: "Mail" },
  {
    href: "https://linkedin.com/in/leandro-licata",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/LeandroLicata", icon: FaGithub, label: "Github" },
  {
    href: "/documents/Leandro Licata CV.pdf",
    icon: FaFilePdf,
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
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <SocialPill href={href} key={label}>
              <Icon className="size-9 text-accent-green hover:text-accent-yellow transition-colors duration-200" />
            </SocialPill>
          ))}
        </nav>
      </div>

      <img
        src="/images/avatar.png"
        alt="avatar"
        className="w-auto h-72 hidden lg:block rounded-xl border border-border-soft shadow-lg"
      />
    </div>
  );
}
