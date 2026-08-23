import { TECH, type Tech } from "./tech";

export type ProjectLink = {
  href: string;
  label: string;
  icon: "link" | "github";
};

export type Project = {
  title: string;
  description: string;
  links: readonly ProjectLink[];
  image: string;
  width: number;
  height: number;
  tags: readonly Tech[];
};

export const PROJECTS: readonly Project[] = [
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
        icon: "link",
      },
      {
        href: "https://github.com/LeandroLicata/StartMed",
        label: "Código",
        icon: "github",
      },
    ],
    image: "/images/StartMed.png",
    width: 960,
    height: 540,
    tags: [
      TECH.LARAVEL,
      TECH.PHP,
      TECH.MYSQL,
      TECH.DOCKER,
      TECH.CLOUDINARY,
      TECH.BOOTSTRAP,
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
        icon: "link",
      },
    ],
    image: "/images/Timbring.png",
    width: 960,
    height: 540,
    tags: [TECH.NEXT, TECH.TAILWIND, TECH.TYPESCRIPT, TECH.REDUX, TECH.NODE],
  },
  {
    title: "Lean Market",
    description:
      "E-commerce de electrónica que armé desde cero para practicar una arquitectura full stack completa: catálogo con búsqueda, filtros y paginación, autenticación con NextAuth y rutas protegidas, y un carrito que funciona sin cuenta y se fusiona con el de la cuenta al iniciar sesión. La compra corre entera en una transacción que descuenta stock de forma atómica, para que dos pedidos simultáneos no puedan dejarlo en negativo, y queda registrada en el historial de pedidos. Falta la pasarela de pago: por ahora la orden queda pendiente de cobro.",
    links: [
      {
        href: "https://lean-market.vercel.app/",
        label: "Ver sitio",
        icon: "link",
      },
      {
        href: "https://github.com/LeandroLicata/lean-market",
        label: "Código",
        icon: "github",
      },
    ],
    image: "/images/Lean-Market.png",
    width: 960,
    height: 540,
    tags: [
      TECH.NEXT,
      TECH.TAILWIND,
      TECH.TYPESCRIPT,
      TECH.REDUX,
      TECH.PRISMA,
      TECH.POSTGRESQL,
      TECH.NEXTAUTH,
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
        icon: "link",
      },
      {
        href: "https://github.com/LeandroLicata/PI-Videogames-Frontend",
        label: "Front",
        icon: "github",
      },
      {
        href: "https://github.com/LeandroLicata/PI-Videogames-Backend",
        label: "Back",
        icon: "github",
      },
    ],
    image: "/images/Gamepedia.png",
    width: 960,
    height: 540,
    tags: [TECH.REACT, TECH.BOOTSTRAP, TECH.REDUX, TECH.NODE, TECH.MONGODB],
  },
];
