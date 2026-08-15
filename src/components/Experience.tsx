"use client";

import { motion } from "framer-motion";
import TechChip from "./TechChip";

// Los nombres tienen que coincidir con las claves de `techIcons`.
const TAGS = {
  NEXT: "Next.js",
  TAILWIND: "TailwindCSS",
  TYPESCRIPT: "TypeScript",
  NESTJS: "NestJS",
  TYPEORM: "TypeORM",
  VITEST: "Vitest",
  JEST: "Jest",
  PLAYWRIGHT: "Playwright",
  SOCKETIO: "Socket.IO",
  STRIPE: "Stripe",
  PRISMA: "Prisma",
  POSTGRESQL: "PostgreSQL",
  REACT: "React",
  REDUX: "Redux",
  NODE: "Node.js",
} as const;

const EXPERIENCES = [
  {
    title: "Desarrollador Web Full Stack",
    company: "Olalingo",
    date: "Diciembre 2025 — Julio 2026",
    description:
      "Plataforma de e-learning de idiomas. Trabajé en remoto sobre 7 repositorios (Olalingo Online, Olalingo Campus y el panel de administración), tocando el stack completo: Next.js y NestJS sobre PostgreSQL.",
    tasks: [
      "Reconstruí el panel de administración desde cero, migrándolo de PHP + React a Next.js: ~20 módulos (cursos, clases, pagos, estadísticas, soporte) entregados y responsive en poco más de un mes.",
      "Construí la capa de pagos multi-proveedor que abstrajo Stripe y MercadoPago detrás de una sola interfaz, con ledger de transacciones escrito desde los webhooks y circuito de retiros y comisiones para profesores.",
      "Implementé el chat de soporte en tiempo real con WebSockets, indicadores de presencia en línea y notificaciones in-app por email.",
      "Llevé el testing a 5 repositorios con Vitest, Playwright y Jest — incluida una suite e2e de 37 suites y 232 tests en el backend de Campus.",
      "Corregí una clase entera de bugs de zonas horarias fijando un contrato UTC de punta a punta, e hice atómica la reserva de clases para eliminar las dobles reservas por concurrencia.",
      "Saneé la base de código heredada: 433 errores de ESLint resueltos, tipado estricto en lugar de any, vulnerabilidades de dependencias y expiración de JWT en tokens de admin.",
      "Usé desarrollo asistido por IA (Claude Code) como parte del flujo diario para debugging, generación de tests y refactors grandes.",
    ],
    tags: [
      TAGS.NEXT,
      TAGS.TYPESCRIPT,
      TAGS.NESTJS,
      TAGS.POSTGRESQL,
      TAGS.TYPEORM,
      TAGS.PRISMA,
      TAGS.SOCKETIO,
      TAGS.STRIPE,
      TAGS.VITEST,
      TAGS.PLAYWRIGHT,
      TAGS.JEST,
      TAGS.TAILWIND,
    ],
  },
  {
    title: "Pasante — Desarrollador Web",
    company: "Timbring",
    date: "Julio — Noviembre 2024",
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
