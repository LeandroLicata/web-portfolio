import TVEffect from "./TVEffect";

export default function AboutMe() {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-text-base md:flex-row text-lg">
      <div className="[&>p]:mb-4 [&>p>span]:text-accent-pink order-2 md:order-1">
        <p>
          <span>¡Hola! Soy Leandro</span>. Inicialmente, me formé como{" "}
          <span>Técnico Electricista</span> y{" "}
          <span>Técnico en Armado y Reparación de PC</span>, pero con el tiempo,
          me sumergí en el mundo de la <span>Programación</span>, donde encontré
          mi verdadera pasión. Desde entonces,{" "}
          <span>me encanta crear experiencias web para los usuarios</span>.
        </p>

        <p>
          Uno de <span>mis logros más destacados</span> fue durante mi tiempo en{" "}
          <a
            href="https://timbring.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline hover:text-accent-green transition"
          >
            <span>Timbring</span>
          </a>
          , donde <span>lideré con éxito</span> la migración de la autenticación
          a <span>NextAuth</span> y trabajé en la{" "}
          <span>optimización del formulario de registro</span>. Este cambio
          permitió que <span>cientos de usuarios</span> se registraran e
          iniciaran sesión de manera más rápida y eficiente.
        </p>

        <p>
          Tengo <span>experiencia en el desarrollo de aplicaciones web</span>, y
          uno de <span>mis proyectos más notables</span> es{" "}
          <a
            href="https://gamepedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline hover:text-accent-green transition"
          >
            <span>Gamepedia</span>
          </a>
          . Este proyecto me permitió combinar dos de mis mayores pasiones:{" "}
          <span>la programación y los videojuegos</span>. En{" "}
          <span>Gamepedia</span>, ayudé a los usuarios a acceder a{" "}
          <span>información detallada</span> sobre cualquier videojuego y
          disfrutar de <span>capturas de pantalla</span>.{" "}
          <span>¡Te invito a explorarlo!</span>
        </p>
      </div>

      <div className="order-1 md:order-2 rotate-3 w-full h-64 rounded-lg border border-border-soft shadow-lg">
        <TVEffect src="/images/me.jpg" alt="Leandro Licata" />
      </div>
    </article>
  );
}
