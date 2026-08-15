"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

const links = [
  { href: `mailto:${SITE.email}`, label: SITE.email, iconSrc: "/icons/mail.png" },
  { href: SITE.linkedin, label: "LinkedIn", iconSrc: "/icons/linkedin.png" },
  // El logo de GitHub es negro y sobre este fondo desaparece.
  { href: SITE.github, label: "GitHub", iconSrc: "/icons/github.png", invert: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  return (
    <motion.div
      className="p-6 text-center border md:p-10 border-border-soft bg-white/[0.02]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.12 }}
    >
      <motion.p variants={fadeUp} className="text-xl text-text-secondary">
        Estoy buscando mi próximo desafío como desarrollador full stack: en
        remoto para equipos de cualquier zona horaria, o presencial e híbrido en
        Mendoza.
      </motion.p>

      <motion.p variants={fadeUp} className="mt-2 text-text-dim">
        Si creés que encajo en lo que están armando, escribime — respondo todos
        los mensajes.
      </motion.p>

      <motion.ul
        variants={fadeUp}
        className="flex flex-wrap items-center justify-center mt-8 gap-x-6 gap-y-3"
      >
        {links.map(({ href, label, iconSrc, invert }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 transition-colors border border-border-soft text-accent-blue hover:border-accent-blue hover:text-accent-green"
            >
              <Image
                src={iconSrc}
                alt=""
                width={24}
                height={24}
                className={`w-6 h-auto ${invert ? "invert" : ""}`}
              />
              {label}
            </a>
          </li>
        ))}
      </motion.ul>

      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center justify-center mt-6 gap-x-4 gap-y-2 text-text-dim"
      >
        <a
          href="/documents/Leandro_Licata_CV_ES.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors hover:text-accent-green"
        >
          Descargar CV (español)
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="/documents/Leandro_Licata_CV_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors hover:text-accent-green"
        >
          Download CV (english)
        </a>
      </motion.div>
    </motion.div>
  );
}
