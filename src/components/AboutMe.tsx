import TVEffect from "./TVEffect";
import ScrollReveal from "./ScrollReveal";

export default function AboutMe() {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-text-secondary md:flex-row text-lg">
      <ScrollReveal direction="left" className="[&>p]:mb-4 [&>p>span]:text-accent-pink order-2 md:order-1">
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
          Actualmente trabajo como <span>desarrollador web en Olalingo</span>,
          donde participo en múltiples proyectos con <span>Next.js</span>,{" "}
          <span>NestJS</span> y <span>PostgreSQL</span>. También desarrollé{" "}
          <span>Gamepedia</span>, una plataforma para explorar videojuegos, y
          armé un <span>e-commerce</span> completo desde cero con{" "}
          <span>Next.js</span>, <span>TailwindCSS</span> y{" "}
          <span>Prisma</span>.
        </p>

        <p>
          Soy <span>curioso</span>, me gusta{" "}
          <span>aprender constantemente</span> y disfruto{" "}
          <span>trabajar en equipo</span> para llevar ideas a proyectos reales
          🚀.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="right" className="order-1 md:order-2 border border-border-soft shadow-lg">
        <TVEffect src="/images/me.jpg" alt="Leandro Licata" />
      </ScrollReveal>
    </article>
  );
}
