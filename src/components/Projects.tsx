import { SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub, FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import LinkButton from "./LinkButton";

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
        label: "Front End Code",
        icon: FaGithub,
      },
      {
        href: "https://github.com/LeandroLicata/PI-Videogames-Backend",
        label: "Back End Code",
        icon: FaGithub,
      },
    ],
    image: "/images/Gamepedia.png",
    tags: [TAGS.REACT, TAGS.BOOTSTRAP, TAGS.REDUX, TAGS.NODE, TAGS.MONGODB],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map(({ image, title, description, tags, links }) => (
        <article
          className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
          key={title}
        >
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <img
                alt={`Imagen del proyecto ${title}`}
                className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                loading="lazy"
                src={image}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
            <div className="flex flex-wrap mt-2">
              <ul className="flex flex-row mb-2 gap-x-2">
                {tags.map((tag) => (
                  <li key={tag.name}>
                    <span
                      className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2 `}
                    >
                      <tag.icon className="w-4 h-4" />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 text-gray-400">{description}</div>
              <footer className="flex items-start mt-4 gap-x-2">
                {links.map(({ href, label, icon: Icon }) => (
                  <LinkButton href={href} key={label}>
                    <Icon className="w-4 h-4" />
                    {label}
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
