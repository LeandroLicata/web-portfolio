export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="opacity-80 p-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
        <span className="text-md sm:text-center text-blue-neon">
          © {currentYear} Leandro Licata.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-md text-light-blue sm:mt-0">
          <li>
            <a href="/#about-me" className="hover:underline me-4 md:me-6">
              Sobre mí
            </a>
          </li>
          <li>
            <a
              id="contacto"
              href="mailto:leandrolicata1@gmail.com"
              className="hover:underline"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
