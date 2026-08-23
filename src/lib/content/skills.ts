export type SkillGroup = {
  label: string;
  skills: readonly string[];
};

// Los nombres tienen que coincidir con las claves de `techIcons`.
export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Redux Toolkit",
      "Bootstrap",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "NextAuth / JWT",
      "WebSockets / Socket.IO",
      "Stripe",
      "MercadoPago",
    ],
  },
  {
    label: "Bases de datos",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "TypeORM"],
  },
  {
    label: "Testing y herramientas",
    skills: [
      "Vitest",
      "Jest",
      "Playwright",
      "Testing Library",
      "Supertest",
      "Git / GitHub",
      "Docker",
      "Vercel",
      "Claude Code",
    ],
  },
];
