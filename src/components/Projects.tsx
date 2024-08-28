import { SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import LinkButton from "./LinkButton";

const TAGS = {
  NEXT: {
    name: "Next.js",
    className: "bg-black text-white",
    icon: SiNextdotjs,
  },
  TAILWIND: {
    name: "Tailwind CSS",
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
};

const PROJECTS = [
  {
    title: "Timbring",
    description:
      "Trabajé en Timbring, un servicio de optimización de entregas en e-commerce. Desarrollé la página de inicio con diseño responsivo, un formulario de registro con validaciones, y migré la autenticación de Auth0 a NextAuth para mejorar la experiencia del usuario. También implementé un sistema de recuperación de contraseñas y apoyé a mis compañeros con Next.js y Redux Toolkit.",
    link: "https://svgl.vercel.app/",
    github: "https://github.com/pheralb/svgl",
    image: "/images/Timbring.png",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.REDUX],
  },
  {
    title: "AdventJS - Retos de programación con JavaScript y TypeScript",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    link: "https://adventjs.dev",
    image: "/projects/adventjs.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map(({ image, title, description, tags, link, github }) => (
        <article
          className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
          key={title}
        >
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <img
                alt="Recién llegado vs 5 años en Nueva Zelanda"
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
                      <tag.icon className="size-4" />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 text-gray-400">{description}</div>
              <footer className="flex items-end justify-start mt-4 gap-x-4">
                {github && (
                  <LinkButton href={github}>
                    <FaGithub className="size-6" />
                    Code
                  </LinkButton>
                )}
                {link && (
                  <LinkButton href={link}>
                    <FaLink className="size-4" />
                    Preview
                  </LinkButton>
                )}
              </footer>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
