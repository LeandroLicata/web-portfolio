"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    title:
      "Capacitación en Desarrollo de Software para Gestión Hospitalaria y Tecnologías Biomédicas",
    institution: "Hospital Universitario, UNCuyo",
    date: "Mayo 2026 — En curso",
  },
  {
    title: "Tecnicatura Superior en Desarrollo de Software",
    institution: "Instituto Superior Manuel Belgrano",
    date: "2026 — En curso",
  },
  {
    title: "Full Stack Web Developer",
    institution: "Henry",
    date: "2022 — 2023",
  },
];

const item = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Education() {
  return (
    <div className="relative">
      <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border-soft" />

      <motion.div
        className="flex flex-col gap-y-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.25 }}
      >
        {EDUCATION.map(({ title, institution, date }) => (
          <motion.article
            key={institution}
            variants={item}
            className="relative pl-8 md:pl-16"
          >
            <div className="absolute left-0 md:left-4 top-1 w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_#00f0ff] -translate-x-[3.5px]" />

            <h3 className="text-xl font-semibold text-accent-pink">{title}</h3>
            <div className="flex flex-wrap items-center gap-x-3 text-text-secondary">
              <span className="text-accent-green font-medium">
                {institution}
              </span>
              <span className="text-text-dim">|</span>
              <time className="text-text-dim text-sm">{date}</time>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
