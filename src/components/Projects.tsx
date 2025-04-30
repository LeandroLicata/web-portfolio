import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiCloudinary,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaGithub,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaYoutube,
} from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import LinkButton from "./LinkButton";
import TVEffect from "./TVEffect";

const TAGS = {
  NEXT: {
    name: "Next.js",
    className: "bg-black text-white",
    icon: SiNextdotjs,
  },
  TAILWIND: {
    name: "TailwindCSS",
    className: "bg-[#38BDF8] text-black",
    icon: RiTailwindCssFill,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    className: "bg-[#2F74C0] text-white",
    icon: SiTypescript,
  },
  REDUX: {
    name: "Redux",
    className: "bg-[#764ABC] text-white",
    icon: SiRedux,
  },
  NODE: {
    name: "Node.js",
    className: "bg-white text-[#689F63]",
    icon: FaNodeJs,
  },
  REACT: {
    name: "React",
    className: "bg-white text-[#149ECA]",
    icon: FaReact,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    className: "bg-[#553D7B] text-white",
    icon: FaBootstrap,
  },
  MONGODB: {
    name: "MongoDB",
    className: "bg-white text-[#06232E]",
    icon: BiLogoMongodb,
  },
  CLOUDINARY: {
    name: "Cloudinary",
    className: "bg-white text-[#3448C5]",
    icon: SiCloudinary,
  },
};

const PROJECTS = [
  {
    title: "Timbring",
    description:
      "Trabajé en Timbring, un servicio de optimización de entregas en e-commerce. Desarrollé la página de inicio con diseño responsivo, un formulario de registro con validaciones, y migré la autenticación de Auth0 a NextAuth para mejorar la experiencia del usuario. También implementé un sistema de recuperación de contraseñas y apoyé a mis compañeros con Next.js y Redux Toolkit.",
    links: [
      {
        href: "https://www.timbring.com/",
        label: "Preview",
        icon: FaLink,
      },
    ],
    image: "/images/Timbring.png",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.REDUX, TAGS.NODE],
  },
  {
    title: "Gamepedia",
    description:
      "Desarrollé un proyecto personal utilizando la API de RAWG donde los usuarios pueden explorar videojuegos, ver detalles e imágenes, realizar búsquedas con filtros y agregar juegos a la base de datos.",
    links: [
      {
        href: "https://gamepedia-gaming.vercel.app/",
        label: "Preview",
        icon: FaLink,
      },
      {
        href: "https://github.com/LeandroLicata/PI-Videogames-Frontend",
        label: "Front End",
        icon: FaGithub,
      },
      {
        href: "https://github.com/LeandroLicata/PI-Videogames-Backend",
        label: "Back End",
        icon: FaGithub,
      },
    ],
    image: "/images/Gamepedia.png",
    tags: [TAGS.REACT, TAGS.BOOTSTRAP, TAGS.REDUX, TAGS.NODE, TAGS.MONGODB],
  },
  {
    title: "Novelty Books",
    description:
      "Como parte de mi formación en programación, participé en un proyecto final grupal llamado Novelty Books junto a mis compañeros de Henry. En este proyecto desarrollamos un e-commerce de libros físicos, aplicando diversas herramientas y técnicas de programación.",
    links: [
      {
        href: "https://www.youtube.com/watch?v=6JF0WrhJlw0",
        label: "Video",
        icon: FaYoutube,
      },
      {
        href: "https://github.com/Chitichi/PFFront",
        label: "Front End",
        icon: FaGithub,
      },
      {
        href: "https://github.com/Arthaz1245/ProyectoFinalGrupo14Backend",
        label: "Back End",
        icon: FaGithub,
      },
    ],
    image: "/images/Novelty-Books.png",
    tags: [TAGS.MONGODB, TAGS.NODE, TAGS.CLOUDINARY, TAGS.NEXT, TAGS.BOOTSTRAP],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map(({ image, title, description, tags, links }) => (
        <article
          key={title}
          className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
        >
          <div className="w-auto h-64 md:w-1/2">
            <TVEffect
              src={image}
              alt={`Imagen del proyecto ${title}`}
              className="object-cover transition duration-500 sm:h-full rounded-lg border border-border-soft shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-semibold text-accent-pink">{title}</h3>

            <div className="flex flex-wrap mt-2">
              <ul className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {tags.map((tag) => (
                  <li key={tag.name}>
                    <span
                      className={`flex gap-x-2 rounded-full text-xs py-1 px-2 bg-background-to text-text-base border border-border-soft`}
                    >
                      <tag.icon className="w-4 h-4 text-accent-yellow" />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 text-text-secondary">{description}</div>

              <footer className="flex items-start mt-4 gap-x-2">
                {links.map(({ href, label, icon: Icon }) => (
                  <LinkButton href={href} key={label}>
                    <Icon className="w-4 h-4 text-accent-green" />
                    <span className="text-text-base">{label}</span>
                  </LinkButton>
                ))}
              </footer>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
