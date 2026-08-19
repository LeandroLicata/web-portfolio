"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialPill from "./SocialPill";
import TVEffect from "./TVEffect";
import TypingEffect from "./TypingEffect";
import { SITE } from "@/lib/site";

const socialLinks = [
  {
    href: `mailto:${SITE.email}`,
    iconSrc: "/icons/mail.png",
    label: "Mail",
  },
  {
    href: SITE.linkedin,
    iconSrc: "/icons/linkedin.png",
    label: "LinkedIn",
  },
  {
    href: SITE.github,
    iconSrc: "/icons/github.png",
    label: "Github",
    // El logo es negro y sobre este fondo desaparece.
    invert: true,
  },
];

const typingTexts = [
  "React & Next.js",
  "TypeScript",
  "NestJS & Node.js",
  "PostgreSQL",
  "TailwindCSS",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

export default function Hero() {
  return (
    <div className="flex items-center justify-between pt-4 lg:pt-0">
      <motion.div
        className="max-w-xl flex-1"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Status badge */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-2 mb-4 text-sm text-accent-green border border-accent-green/30 bg-accent-green/5 rounded px-3 py-1.5 w-fit max-w-full"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-green" />
          </span>
          {/* min-w-0 junto con el max-w-full del badge deja que el texto se
              parta en dos líneas si crece: como ítem de flex tiene min-width
              auto y, sin esto, empujaría el ancho en vez de wrapear. */}
          <span className="min-w-0">
            {"> disponible: remoto, híbrido o presencial"}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold tracking-tight text-accent-blue"
        >
          Hola, soy Leandro Licata
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 text-xl text-text-secondary">
          <span className="text-accent-pink">Desarrollador Web Full Stack</span>
          , especializado en{" "}
          <span className="text-accent-blue">
            <TypingEffect texts={typingTexts} />
          </span>
        </motion.p>

        <motion.p variants={fadeUp} className="mt-3 text-text-dim">
          Desde Mendoza, Argentina (GMT-3). Vengo de una plataforma de
          e-learning en producción —pagos, tiempo real y testing— y hoy
          construyo software de gestión hospitalaria en el{" "}
          <span className="text-text-secondary">Hospital Universitario</span>.
        </motion.p>

        <motion.nav
          variants={fadeUp}
          className="flex flex-wrap gap-4 mt-8 items-center"
        >
          {socialLinks.map(({ href, iconSrc, label, invert }) => (
            <SocialPill href={href} key={label} title={label}>
              <Image
                src={iconSrc}
                alt={label}
                width={36}
                height={36}
                className={`w-9 h-auto ${invert ? "invert" : ""}`}
              />
            </SocialPill>
          ))}

          <span className="text-border-soft hidden sm:inline">|</span>

          <SocialPill
            href="/documents/Leandro_Licata_CV_ES.pdf"
            title="Descargar CV en español"
          >
            <Image src="/icons/cv.png" alt="" width={36} height={39} className="w-9 h-auto" />
            <span className="text-text-secondary text-sm">CV · ES</span>
          </SocialPill>
          <SocialPill
            href="/documents/Leandro_Licata_CV_EN.pdf"
            title="Download CV in English"
          >
            <Image src="/icons/cv.png" alt="" width={36} height={39} className="w-9 h-auto" />
            <span className="text-text-secondary text-sm">CV · EN</span>
          </SocialPill>
        </motion.nav>
      </motion.div>

      <motion.div
        className="hidden lg:block shrink-0"
        variants={fadeRight}
        initial="hidden"
        animate="show"
      >
        <TVEffect
          src="/images/avatar.png"
          alt="Leandro Licata"
          className="h-72 w-64"
          width={1024}
          height={1024}
          sizes="256px"
          priority
        />
      </motion.div>
    </div>
  );
}
