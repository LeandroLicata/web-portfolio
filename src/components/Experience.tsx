"use client";

import { motion } from "framer-motion";
import TechChip from "./TechChip";
import { EXPERIENCES } from "@/lib/content/experience";

const timelineItem = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <div className="relative">
      {/* Línea vertical de la timeline */}
      <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border-soft" />

      <motion.div
        className="flex flex-col gap-y-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.25 }}
      >
        {EXPERIENCES.map(({ title, company, date, description, tasks, tags }) => (
          <motion.article
            key={company}
            variants={timelineItem}
            className="relative pl-8 md:pl-16"
          >
            {/* Punto en la timeline */}
            <div className="absolute left-0 md:left-4 top-1 w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_#00f0ff] -translate-x-[3.5px]" />

            <header className="mb-3">
              <h3 className="text-xl font-semibold text-accent-pink">
                {title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 text-text-secondary">
                <span className="text-accent-green font-medium">{company}</span>
                <span className="text-text-dim">|</span>
                <time className="text-text-dim text-sm">{date}</time>
              </div>
            </header>

            <p className="text-text-secondary mb-3">{description}</p>

            <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm mb-4">
              {tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag}>
                  <TechChip name={tag} />
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
