export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="opacity-90 p-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
      <div className="w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4 border-t border-border-soft">
        <span className="text-md sm:text-center text-text-secondary drop-shadow-glow">
          © {currentYear} Leandro Licata.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-md text-accent-blue sm:mt-0 gap-x-4">
          <li>
            <a
              href="/#about-me"
              className="hover:underline hover:text-accent-green transition"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              id="contacto"
              href="mailto:leandrolicata1@gmail.com"
              className="hover:underline hover:text-accent-green transition"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
