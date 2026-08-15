export const SITE = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://leandro-licata-portfolio.vercel.app",
  name: "Leandro Licata",
  role: "Desarrollador Web Full Stack",
  location: "Mendoza, Argentina",
  email: "leandrolicata1@gmail.com",
  linkedin: "https://linkedin.com/in/leandro-licata",
  github: "https://github.com/LeandroLicata",
  description:
    "Portfolio de Leandro Licata, desarrollador web full stack especializado en React, Next.js, TypeScript, NestJS y PostgreSQL. Disponible para trabajo remoto, híbrido o presencial.",
} as const;
