"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Youtube } from "lucide-react";
import LinkButton from "./LinkButton";
import TVEffect from "./TVEffect";
import TiltCard from "./TiltCard";
import TechChip from "./TechChip";

// Los nombres tienen que coincidir con las claves de `techIcons`.
const TAGS = {
  NEXT: "Next.js",
  TAILWIND: "TailwindCSS",
  TYPESCRIPT: "TypeScript",
  REDUX: "Redux",
  NODE: "Node.js",
  REACT: "React",
  BOOTSTRAP: "Bootstrap",
  MONGODB: "MongoDB",
  CLOUDINARY: "Cloudinary",
  PRISMA: "Prisma",
  POSTGRESQL: "PostgreSQL",
  LARAVEL: "Laravel",
  PHP: "PHP",
  MYSQL: "MySQL",
  DOCKER: "Docker",
} as const;

const ICONS = {
  link: ExternalLink,
  github: Github,
  youtube: Youtube,
} as const;

const PROJECTS = [
  {
    title: "StartMed",
    description:
      "Sistema de gestión prequirúrgica: agenda de quirófanos, autorizaciones ante obras sociales, pedidos de materiales y hemoderivados, evaluación pre-anestésica y consentimientos informados. Lo desarrollamos en equipo durante la capacitación en el Hospital Universitario de la UNCuyo. Me ocupé del módulo de administración (usuarios y roles, auditoría, catálogos, consentimientos y precios), integré Cloudinary para los archivos clínicos, dockericé el proyecto y me hice cargo del despliegue.",
    links: [
      {
        // Apunta a la página de enlaces y no a la demo directa: la demo pide
        // login y esa página tiene los usuarios de prueba, el aviso del cold
        // start de Render y el link al código.
        href: "https://leandrolicata.github.io/startmed-enlaces/",
        label: "Demo y accesos",
        icon: "link" as const,
      },
      {
        href: "https://github.com/LeandroLicata/StartMed",
        label: "Código",
        icon: "github" as const,
      },
    ],
    image: "/images/StartMed.png",
    width: 1200,
    height: 675,
    tags: [
      TAGS.LARAVEL,
      TAGS.PHP,
      TAGS.MYSQL,
      TAGS.DOCKER,
      TAGS.CLOUDINARY,
      TAGS.BOOTSTRAP,
    ],
  },
  {
    title: "Timbring",
    description:
      "Servicio de optimización de entregas para e-commerce, con usuarios reales en producción. Lideré la migración del sistema de autenticación de Auth0 a NextAuth, construí la landing responsive y el formulario de registro con validaciones, e implementé el flujo de recuperación de contraseñas.",
    links: [
      {
        href: "https://www.timbring.com/",
        label: "Ver sitio",
        icon: "link" as const,
      },
    ],
    image: "/images/Timbring.png",
    width: 960,
    height: 540,
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.REDUX, TAGS.NODE],
  },
  {
    title: "Lean Market",
    description:
      "E-commerce de productos electrónicos que armé desde cero para practicar una arquitectura full stack completa: catálogo con búsqueda y filtros, productos destacados, y capa de datos con Prisma sobre PostgreSQL. En desarrollo activo — próximos pasos: carrito, checkout y panel de administración.",
    links: [
      {
        href: "https://lean-market.vercel.app/",
        label: "Ver sitio",
        icon: "link" as const,
      },
      {
        href: "https://github.com/LeandroLicata/lean-market",
        label: "Código",
        icon: "github" as const,
      },
    ],
    image: "/images/Lean-Market.png",
    width: 1920,
    height: 1080,
    tags: [
      TAGS.NEXT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.REDUX,
      TAGS.PRISMA,
      TAGS.POSTGRESQL,
    ],
  },
  {
    title: "Gamepedia",
    description:
      "Buscador de videojuegos sobre la API de RAWG. Los usuarios exploran títulos con filtros combinados, ven el detalle de cada juego y pueden dar de alta los suyos propios. Full stack propio: SPA en React con Redux y API en Node sobre MongoDB.",
    links: [
      {
        href: "https://gamepedia-gaming.vercel.app/",
        label: "Ver sitio",
        icon: "link" as const,
      },
      {
        href: "https://github.com/LeandroLicata/PI-Videogames-Frontend",
        label: "Front",
        icon: "github" as const,
      },
      {
        href: "https://github.com/LeandroLicata/PI-Videogames-Backend",
        label: "Back",
        icon: "github" as const,
      },
    ],
    image: "/images/Gamepedia.png",
    width: 960,
    height: 540,
    tags: [TAGS.REACT, TAGS.BOOTSTRAP, TAGS.REDUX, TAGS.NODE, TAGS.MONGODB],
  },
  {
    title: "Novelty Books",
    description:
      "E-commerce de libros desarrollado en equipo como proyecto final de Henry, trabajando con metodología ágil y control de versiones compartido. Incluye catálogo, carrito, gestión de usuarios y carga de imágenes con Cloudinary.",
    links: [
      {
        href: "https://www.youtube.com/watch?v=6JF0WrhJlw0",
        label: "Demo",
        icon: "youtube" as const,
      },
      {
        href: "https://github.com/Chitichi/PFFront",
        label: "Front",
        icon: "github" as const,
      },
      {
        href: "https://github.com/Arthaz1245/ProyectoFinalGrupo14Backend",
        label: "Back",
        icon: "github" as const,
      },
    ],
    image: "/images/Novelty-Books.png",
    width: 960,
    height: 540,
    tags: [TAGS.MONGODB, TAGS.NODE, TAGS.CLOUDINARY, TAGS.NEXT, TAGS.BOOTSTRAP],
  },
];

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
