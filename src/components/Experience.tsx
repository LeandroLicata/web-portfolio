"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";

interface Tag {
  name: string;
  iconSrc?: string;
}

const TAGS: Record<string, Tag> = {
  NEXT: { name: "Next.js", iconSrc: "/icons/next.png" },
  TAILWIND: { name: "TailwindCSS", iconSrc: "/icons/tailwind.png" },
  TYPESCRIPT: { name: "TypeScript", iconSrc: "/icons/typescript.png" },
  NESTJS: { name: "NestJS" },
  TYPEORM: { name: "TypeORM" },
  PRISMA: { name: "Prisma", iconSrc: "/icons/prisma.png" },
  POSTGRESQL: { name: "PostgreSQL", iconSrc: "/icons/postgresql.png" },
  REACT: { name: "React", iconSrc: "/icons/react.png" },
  REDUX: { name: "Redux", iconSrc: "/icons/redux.png" },
  NODE: { name: "Node.js", iconSrc: "/icons/node.png" },
};

const EXPERIENCES = [
  {
    title: "Desarrollador Web",
    company: "Olalingo",
    date: "Diciembre 2025 — Presente",
    description:
      "Participé en múltiples proyectos (Olalingo Online, Olalingo Campus y el panel de administración) como desarrollador remoto.",
    tasks: [
      "Migré el sistema de autenticación a NextAuth implementando access tokens y refresh tokens con JWT.",
      "Migré el panel de administración desde PHP + React a Next.js, unificando sistemas.",
      "Implementé tests unitarios y end-to-end en 5 repositorios (frontend y backend de ambos proyectos y admin).",
      "Corregí bugs y mejoré la arquitectura general del sistema.",
      "Utilicé herramientas de desarrollo asistido por IA (Claude Code) para acelerar debugging, generación de tests y refactorización.",
    ],
    tags: [
      TAGS.NEXT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.NESTJS,
      TAGS.TYPEORM,
      TAGS.PRISMA,
      TAGS.POSTGRESQL,
    ],
  },
  {
    title: "Pasante — Desarrollador Web",
    company: "Timbring",
    date: "2024",
    description:
      "Trabajé en un servicio de optimización de entregas para e-commerce.",
    tasks: [
      "Lideré la migración de autenticación de Auth0 a NextAuth, mejorando la experiencia de inicio de sesión para cientos de usuarios.",
      "Desarrollé la página de inicio con diseño responsivo y un formulario de registro con validaciones.",
      "Implementé un sistema de recuperación de contraseñas.",
      "Apoyé a compañeros del equipo con Next.js y Redux Toolkit.",
    ],
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.REDUX, TAGS.NODE],
  },
];

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

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag.name}>
                  {tag.iconSrc && (
                    <img
                      src={tag.iconSrc}
                      alt={tag.name}
                      className="w-4 h-4"
                    />
                  )}
                  {tag.name}
                </Badge>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
