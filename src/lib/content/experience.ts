import { TECH, type Tech } from "./tech";

export type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
  tasks: string[];
  tags: readonly Tech[];
};

export const EXPERIENCES: readonly Experience[] = [
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
      TECH.NEXT,
      TECH.TYPESCRIPT,
      TECH.NESTJS,
      TECH.POSTGRESQL,
      TECH.TYPEORM,
      TECH.PRISMA,
      TECH.SOCKETIO,
      TECH.STRIPE,
      TECH.VITEST,
      TECH.PLAYWRIGHT,
      TECH.JEST,
      TECH.TAILWIND,
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
    tags: [TECH.NEXT, TECH.TAILWIND, TECH.TYPESCRIPT, TECH.REDUX, TECH.NODE],
  },
];
