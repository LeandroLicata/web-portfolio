export default function AboutMe() {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-gray-300 md:flex-row">
      <div className="[&>p]:mb-4 [&>p>strong]:text-light-blue [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
        <p>
          <strong>¡Hola! Soy Leandro</strong>. Inicialmente, me formé como{" "}
          <strong>Técnico Electricista</strong> y{" "}
          <strong>Técnico en Armado y Reparación de PC</strong>, pero con el
          tiempo, me sumergí en el mundo de la <strong>Programación</strong>,
          donde encontré mi verdadera pasión. Desde entonces,{" "}
          <strong>me encanta crear experiencias web para los usuarios</strong>.
        </p>

        <p>
          Uno de <strong>mis logros más destacados</strong> fue durante mi
          tiempo en <strong>Timbring</strong>, donde{" "}
          <strong>lideré con éxito</strong> la migración de la autenticación a{" "}
          <strong>NextAuth</strong> y trabajé en la{" "}
          <strong>optimización del formulario de registro</strong>. Este cambio
          permitió que <strong>cientos de usuarios</strong> se registraran e
          iniciaran sesión de manera más rápida y eficiente.
        </p>

        <p>
          Tengo{" "}
          <strong>experiencia en el desarrollo de aplicaciones web</strong>, y
          uno de <strong>mis proyectos más notables</strong> es{" "}
          <strong>Gamepedia</strong>. Este proyecto me permitió combinar dos de
          mis mayores pasiones:{" "}
          <strong>la programación y los videojuegos</strong>. En{" "}
          <strong>Gamepedia</strong>, ayudé a los usuarios a acceder a{" "}
          <strong>información detallada</strong> sobre cualquier videojuego y
          disfrutar de <strong>capturas de pantalla</strong>.{" "}
          <strong>¡Te invito a explorarlo!</strong>
        </p>
      </div>

      <img
        width="200"
        height="200"
        src="/images/me.jpg"
        alt="Leandro Licata"
        className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-72 aspect-square rounded-2xl bg-yellow-500/5 ring-1 ring-white/20"
        style={{ objectPosition: "50% 50%" }}
      ></img>
    </article>
  );
}
