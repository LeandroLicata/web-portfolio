// Vocabulario único de tecnologías. Las claves de `techIcons` tienen que
// coincidir exactamente con estos valores: si no, el chip sale sin icono.
export const TECH = {
  BOOTSTRAP: "Bootstrap",
  CLOUDINARY: "Cloudinary",
  DOCKER: "Docker",
  JEST: "Jest",
  LARAVEL: "Laravel",
  MONGODB: "MongoDB",
  MYSQL: "MySQL",
  NEXT: "Next.js",
  NEXTAUTH: "NextAuth / JWT",
  NESTJS: "NestJS",
  NODE: "Node.js",
  PHP: "PHP",
  PLAYWRIGHT: "Playwright",
  POSTGRESQL: "PostgreSQL",
  PRISMA: "Prisma",
  REACT: "React",
  REDUX: "Redux",
  SOCKETIO: "Socket.IO",
  STRIPE: "Stripe",
  TAILWIND: "TailwindCSS",
  TYPEORM: "TypeORM",
  TYPESCRIPT: "TypeScript",
  VITEST: "Vitest",
} as const;

export type Tech = (typeof TECH)[keyof typeof TECH];
