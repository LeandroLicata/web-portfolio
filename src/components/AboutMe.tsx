import TVEffect from "./TVEffect";

export default function AboutMe() {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-text-secondary md:flex-row text-lg">
      <div className="[&>p]:mb-4 [&>p>span]:text-accent-pink order-2 md:order-1">
        <p>
          👋 ¡Hola! Soy <span>Leandro Licata</span>,{" "}
          <span>desarrollador web</span> enfocado en <span>React</span>,{" "}
          <span>Next.js</span> y <span>TypeScript</span>. Me gusta crear
          aplicaciones modernas, bien diseñadas y que realmente sean útiles para
          la gente.
        </p>

        <p>
          Antes de meterme de lleno en la <span>programación</span> trabajé como{" "}
          <span>técnico de PC</span> y <span>electricista</span>, experiencias
          que me dieron mucha práctica resolviendo problemas, aprendiendo de
          forma autodidacta y adaptándome a distintos desafíos.
        </p>

        <p>
          Durante mi <span>pasantía en Timbring</span> lideré la migración de
          autenticación a <span>NextAuth</span> y mejoré el registro de
          usuarios, lo que hizo más simple y seguro el inicio de sesión para
          cientos de personas. También desarrollé <span>Gamepedia</span>, una
          plataforma para explorar videojuegos, y ahora estoy armando un{" "}
          <span>e-commerce</span> completo desde cero con <span>Next.js</span>,{" "}
          <span>TailwindCSS</span> y <span>Prisma</span>.
        </p>

        <p>
          Soy <span>curioso</span>, me gusta{" "}
          <span>aprender constantemente</span> y disfruto{" "}
          <span>trabajar en equipo</span> para llevar ideas a proyectos reales
          🚀.
        </p>
      </div>

      <div className="order-1 md:order-2 border border-border-soft shadow-lg ">
        <TVEffect src="/images/me.jpg" alt="Leandro Licata" />
      </div>
    </article>
  );
}
