import Badge from "./Badge";
import SocialPill from "./SocialPill";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const socialLinks = [
  { href: "mailto:leandrolicata1@gmail.com", icon: FiMail, label: "Mail" },
  {
    href: "https://linkedin.com/in/leandro-licata",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/LeandroLicata", icon: FaGithub, label: "Github" },
  {
    href: "/documents/Leandro Licata CV.pdf",
    icon: FaFilePdf,
    label: "Currículum",
  },
];

export default function Hero() {
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl tracking-tight text-light-blue md:text-5xl dark:text-white">
        Hola, soy Leandro Licata
      </h1>
      <p className="mt-6 text-xl text-light-blue [&>strong]:text-pink">
        <strong>Full Stack Web Developer </strong> de Mendoza, Argentina,
        especializado en la creación de aplicaciones web con{" "}
        <strong>React</strong>. Mi framework favorito es{" "}
        <strong>Next.js</strong> y tengo sólidos conocimientos en{" "}
        <strong>Node.js</strong>, <strong>PostgreSQL</strong> y{" "}
        <strong>MongoDB</strong>.
      </p>

      <nav className="flex flex-wrap gap-4 mt-8">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <SocialPill href={href} key={label}>
            <Icon className="size-6" />
            <span className="ml-2 hidden group-hover:inline">{label}</span>
          </SocialPill>
        ))}
      </nav>
    </div>
  );
}
