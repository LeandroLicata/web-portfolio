import LinkButton from "./LinkButton";
import TVEffect from "./TVEffect";

const TAGS = {
  NEXT: {
    name: "Next.js",
    className: "text-black",
    iconSrc: "/icons/next.png",
  },
  TAILWIND: {
    name: "TailwindCSS",
    className: "text-[#38BDF8]",
    iconSrc: "/icons/tailwind.png",
  },
  TYPESCRIPT: {
    name: "TypeScript",
    className: "text-[#2F74C0]",
    iconSrc: "/icons/typescript.png",
  },
  REDUX: {
    name: "Redux",
    className: "text-[#764ABC]",
    iconSrc: "/icons/redux.png",
  },
  NODE: {
    name: "Node.js",
    className: "text-[#689F63]",
    iconSrc: "/icons/node.png",
  },
  REACT: {
    name: "React",
    className: "text-[#764ABC]",
    iconSrc: "/icons/react.png",
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    className: "text-[#553D7B]",
    iconSrc: "/icons/bootstrap.png",
  },
  MONGODB: {
    name: "MongoDB",
    className: "text-[#06232E]",
    iconSrc: "/icons/mongo.png",
  },
  CLOUDINARY: {
    name: "Cloudinary",
    className: "text-[#3448C5]",
    iconSrc: "/icons/cloudinary.png",
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
        iconSrc: "/icons/link.png",
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
        iconSrc: "/icons/link.png",
      },
      {
        href: "https://github.com/LeandroLicata/PI-Videogames-Frontend",
        label: "Front End",
        iconSrc: "/icons/github.png",
      },
      {
        href: "https://github.com/LeandroLicata/PI-Videogames-Backend",
        label: "Back End",
        iconSrc: "/icons/github.png",
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
        iconSrc: "/icons/youtube.png",
      },
      {
        href: "https://github.com/Chitichi/PFFront",
        label: "Front End",
        iconSrc: "/icons/github.png",
      },
      {
        href: "https://github.com/Arthaz1245/ProyectoFinalGrupo14Backend",
        label: "Back End",
        iconSrc: "/icons/github.png",
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
              className="object-cover transition duration-500 sm:h-full rounded-none border border-border-soft shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-semibold text-accent-pink">{title}</h3>

            <div className="flex flex-wrap mt-2">
              <ul className="grid grid-cols-3 md:grid-cols-5 gap-2">
                {tags.map((tag) => (
                  <li key={tag.name}>
                    <span
                      className={`flex items-center justify-center gap-x-1 text-xs py-1 px-1 bg-white rounded-sm ${tag.className}`}
                    >
                      <img
                        src={tag.iconSrc}
                        alt={tag.name}
                        className="w-4 h-4"
                      />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 text-text-secondary">{description}</div>

              <footer className="flex items-start mt-4 gap-x-2">
                {links.map(({ href, label, iconSrc }) => (
                  <LinkButton href={href} key={label}>
                    <img src={iconSrc} alt={label} className="w-4" />
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
