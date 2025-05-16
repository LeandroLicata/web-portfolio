import TVEffect from "./TVEffect";

export default function AboutMe() {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-text-secondary md:flex-row text-lg">
      <div className="[&>p]:mb-4 [&>p>span]:text-accent-pink order-2 md:order-1">
        <p>
          ¡Hola! Soy <span>Leandro Licata</span>, desarrollador web con{" "}
          <span>2 años de experiencia</span> creando aplicaciones modernas,
          funcionales y centradas en el usuario. Me apasiona transformar ideas
          en productos digitales bien diseñados y escalables.
        </p>

        <p>
          Durante mi pasantía en <span>Timbring</span>, lideré la migración del
          sistema de autenticación a <span>NextAuth</span> e implementé mejoras
          clave en el <span>formulario de registro</span>. Estas optimizaciones
          mejoraron significativamente la experiencia de registro e inicio de
          sesión para cientos de usuarios.
        </p>

        <p>
          Actualmente estoy desarrollando un <span>e-commerce</span> desde cero,
          aplicando tecnologías como <span>Next.js</span>,{" "}
          <span>TypeScript</span> y <span>TailwindCSS</span>. El proyecto apunta
          a ofrecer una experiencia fluida, con funcionalidades como{" "}
          <span>catálogo dinámico</span>, <span>carrito de compras</span> y{" "}
          <span>panel de administración</span>.
        </p>

        <p>
          Entre mis proyectos anteriores, destaco <span>Gamepedia</span>, una
          plataforma para explorar videojuegos que permite a los usuarios buscar
          títulos, ver información detallada y disfrutar de capturas de
          pantalla.
        </p>

        <p>
          <strong>
            Estoy abierto a nuevas oportunidades y desafíos. No dudes en
            contactarme si creés que podríamos trabajar juntos.
          </strong>
        </p>
      </div>

      <div className="order-1 md:order-2 border border-border-soft shadow-lg ">
        <TVEffect src="/images/me.jpg" alt="Leandro Licata" />
      </div>
    </article>
  );
}
