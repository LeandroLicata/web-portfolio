import type { ComponentType, CSSProperties } from "react";
import {
  SiAnthropic,
  SiBootstrap,
  SiCloudinary,
  SiDocker,
  SiGit,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiMercadopago,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPlaywright,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVitest,
} from "react-icons/si";
import { Database, FlaskConical } from "lucide-react";

/**
 * Registro único de tecnologías: icono vectorial + color.
 *
 * Los colores no siempre son el hex oficial de la marca. Varios logos son
 * negros o muy oscuros (Next.js, Vercel, Socket.IO, Prisma) y sobre este fondo
 * desaparecerían, así que se usa la variante clara —que es la que esas marcas
 * publican para dark mode—. Otros se aclaran apenas para despegarse del azul
 * de fondo. Si agregás una tecnología nueva, sumala acá y elegí un color que
 * se lea sobre #0a0f2c.
 */
/** Tipo mínimo que cumplen tanto los iconos de react-icons como los de lucide. */
type IconComponent = ComponentType<{
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean | "true" | "false";
}>;

export const TECH: Record<string, { Icon: IconComponent; color: string }> = {
  // Frontend
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { Icon: SiTypescript, color: "#4B9FE1" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TailwindCSS: { Icon: SiTailwindcss, color: "#38BDF8" },
  Redux: { Icon: SiRedux, color: "#A47BEA" },
  "Redux Toolkit": { Icon: SiRedux, color: "#A47BEA" },
  Bootstrap: { Icon: SiBootstrap, color: "#9B72D0" },

  // Backend
  "Node.js": { Icon: SiNodedotjs, color: "#7DC96B" },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  "REST APIs": { Icon: SiOpenapiinitiative, color: "#8FD14F" },
  "NextAuth / JWT": { Icon: SiJsonwebtokens, color: "#C9A8FF" },
  "WebSockets / Socket.IO": { Icon: SiSocketdotio, color: "#FFFFFF" },
  "Socket.IO": { Icon: SiSocketdotio, color: "#FFFFFF" },
  Stripe: { Icon: SiStripe, color: "#8B85FF" },
  MercadoPago: { Icon: SiMercadopago, color: "#00B1EA" },
  Cloudinary: { Icon: SiCloudinary, color: "#7B93F0" },

  // Bases de datos
  PostgreSQL: { Icon: SiPostgresql, color: "#6C8FEF" },
  MongoDB: { Icon: SiMongodb, color: "#4DB33D" },
  Prisma: { Icon: SiPrisma, color: "#A5B4FC" },
  TypeORM: { Icon: Database, color: "#F5A97F" },

  // Testing y herramientas
  Vitest: { Icon: SiVitest, color: "#A5C625" },
  Jest: { Icon: SiJest, color: "#E4515F" },
  Playwright: { Icon: SiPlaywright, color: "#4CC552" },
  "Testing Library": { Icon: SiTestinglibrary, color: "#E8574A" },
  Supertest: { Icon: FlaskConical, color: "#7FD1C1" },
  "Git / GitHub": { Icon: SiGit, color: "#F0724F" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Vercel: { Icon: SiVercel, color: "#FFFFFF" },
  "Claude Code": { Icon: SiAnthropic, color: "#D97757" },
};
