import Link from "next/link";

const navItems = [
  {
    title: "Inicio",
    label: "home",
    url: "/#home",
  },
  {
    title: "Sobre mí",
    label: "about-me",
    url: "/#about-me",
  },
  {
    title: "Proyectos",
    label: "projects",
    url: "/#projects",
  },
  {
    title: "Tecnologías",
    label: "technologies",
    url: "/#technologies",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex px-3 text-sm font-medium rounded-full text-light-blue justify-center items-center bg-black">
        {navItems.map((link) => (
          <Link
            key={link.label}
            className="relative block px-2 py-2 transition hover:text-pink"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
