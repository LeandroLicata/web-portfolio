"use client";

import { motion } from "framer-motion";
import TechChip from "./TechChip";
import { SKILL_GROUPS } from "@/lib/content/skills";

const group = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.12 }}
    >
      {SKILL_GROUPS.map(({ label, skills }) => (
        <motion.div
          key={label}
          variants={group}
          className="p-4 border border-border-soft bg-white/[0.02]"
        >
          <h3 className="mb-3 text-lg tracking-wider uppercase text-accent-green">
            {label}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((name) => (
              <li key={name}>
                <TechChip name={name} />
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
