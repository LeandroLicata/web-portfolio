"use client";

import { motion } from "framer-motion";
import SocialPill from "./SocialPill";
import TVEffect from "./TVEffect";
import TypingEffect from "./TypingEffect";

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
          className="flex items-center gap-2 mb-4 text-sm text-accent-green border border-accent-green/30 bg-accent-green/5 rounded px-3 py-1.5 w-fit"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-green" />
          </span>
          {"> disponible para trabajar"}
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
          De Mendoza, Argentina. Creando aplicaciones web modernas y escalables.
        </motion.p>

        <motion.nav
          variants={fadeUp}
          className="flex flex-wrap gap-4 mt-8 items-center"
        >
          {socialLinks.map(({ href, iconSrc, label }) => (
            <SocialPill href={href} key={label}>
              <img src={iconSrc} alt={label} className="w-9" />
            </SocialPill>
          ))}

          <span className="text-border-soft hidden sm:inline">|</span>

          <SocialPill href="/documents/Leandro_Licata_CV_ES.pdf">
            <img src="/icons/cv.png" alt="CV" className="w-9" />
            <span className="text-text-secondary text-sm">ES</span>
          </SocialPill>
          <SocialPill href="/documents/Leandro_Licata_CV_EN.pdf">
            <img src="/icons/cv.png" alt="CV" className="w-9" />
            <span className="text-text-secondary text-sm">EN</span>
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
        />
      </motion.div>
    </div>
  );
}
