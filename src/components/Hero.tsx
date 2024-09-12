import Badge from "./Badge";
import SocialPill from "./SocialPill";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="max-w-xl">
      <div className="flex gap-4 mb-4">
        <img
          className="rounded-full shadow-lg size-16"
          src="/images/Leandro.jpg"
          alt="Leandro Licata"
        />
        <a
          href="https://linkedin.com/in/leandro-licata"
          target="_blank"
          rel="noopener"
          className="flex items-center transition md:justify-center md:hover:scale-105"
        >
          <Badge>Disponible para trabajar</Badge>
        </a>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl dark:text-white">
        Hola, soy Leandro Licata
      </h1>
      <p className="mt-6 text-xl text-gray-200 [&>strong]:text-light-blue [&>strong]:font-semibold">
        <strong>Full Stack Web Developer </strong> de Mendoza, Argentina.
        Especializado en el desarrollo de aplicaciones web únicas.
      </p>
      <nav className="flex flex-wrap gap-4 mt-8">
        <SocialPill href="mailto:leandrolicata1@gmail.com">
          <FiMail className="size-4" />
          Contáctame
        </SocialPill>
        <SocialPill href="https://linkedin.com/in/leandro-licata">
          <FaLinkedin className="size-4" />
          LinkedIn
        </SocialPill>
        <SocialPill href="https://github.com/LeandroLicata">
          <FaGithub className="size-4" />
          Github
        </SocialPill>
        <SocialPill href="/documents/Leandro Licata CV.pdf">
          <FaFilePdf className="size-4" />
          CV
        </SocialPill>
      </nav>
    </div>
  );
}
