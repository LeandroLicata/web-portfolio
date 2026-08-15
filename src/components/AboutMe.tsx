import TVEffect from "./TVEffect";
import ScrollReveal from "./ScrollReveal";

export default function AboutMe() {
  return (
    // overflow-hidden recorta el desplazamiento inicial de los ScrollReveal
    // laterales: sin esto, esos 40px ensanchan el documento y habilitan scroll
    // horizontal en pantallas chicas.
    <article className="flex flex-col items-center justify-center gap-8 overflow-hidden text-text-secondary md:flex-row text-lg">
      <ScrollReveal
        direction="left"
        className="[&>p]:mb-4 [&>p>span]:text-accent-pink order-2 md:order-1"
      >
        <p>
          👋 Antes de programar fui <span>técnico de PC</span> y{" "}
          <span>electricista</span>. Suena lejano, pero es de donde saqué lo que
          más uso hoy: <span>diagnosticar</span> sin documentación, aprender lo
          que haga falta sobre la marcha y no soltar un sistema hasta que
          funciona.
        </p>

        <p>
          Eso es más o menos lo que hago ahora, con otras herramientas. En{" "}
          <span>Olalingo</span> me tocó meterme en{" "}
          <span>código heredado</span> de siete repositorios y dejarlo andando:
          perseguir bugs de zonas horarias hasta la causa, hacer atómica una
          reserva que se duplicaba, poner <span>tests</span> donde no había
          ninguno.
        </p>

        <p>
          Me interesa el trabajo donde el código le resuelve algo concreto a
          alguien, y los equipos donde se{" "}
          <span>discuten las decisiones técnicas</span> 🚀.
        </p>
      </ScrollReveal>

      <ScrollReveal
        direction="right"
        className="order-1 shrink-0 md:order-2 border border-border-soft shadow-lg"
      >
        <TVEffect
          src="/images/me.jpg"
          alt="Leandro Licata"
          width={915}
          height={1105}
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </ScrollReveal>
    </article>
  );
}
