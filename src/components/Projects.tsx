"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import LinkButton from "./LinkButton";
import TVEffect from "./TVEffect";
import TiltCard from "./TiltCard";
import TechChip from "./TechChip";
import { PROJECTS } from "@/lib/content/projects";

const ICONS = {
  link: ExternalLink,
  github: Github,
} as const;

const projectItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <motion.div
      className="flex flex-col gap-y-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.2 }}
    >
      {PROJECTS.map(
        ({ image, width, height, title, description, tags, links }) => (
          <motion.div key={title} variants={projectItem}>
            <TiltCard className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0 md:items-center">
              <div className="w-auto md:h-64 md:w-1/2">
                <TVEffect
                  src={image}
                  alt={`Captura del proyecto ${title}`}
                  className="object-cover transition duration-500 sm:h-full rounded-none border border-border-soft shadow-md"
                  width={width}
                  height={height}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <div className="w-full md:w-1/2 md:max-w-lg">
                <h3 className="text-2xl font-semibold text-accent-pink">
                  {title}
                </h3>

                <ul className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <li key={tag}>
                      <TechChip name={tag} />
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-text-secondary">{description}</p>

                <footer className="flex flex-wrap items-start mt-4 gap-2">
                  {links.map(({ href, label, icon }) => {
                    const Icon = ICONS[icon];
                    return (
                      <LinkButton href={href} key={label}>
                        <Icon size={16} aria-hidden="true" />
                        <span className="text-text-base">{label}</span>
                      </LinkButton>
                    );
                  })}
                </footer>
              </div>
            </TiltCard>
          </motion.div>
        )
      )}
    </motion.div>
  );
}
