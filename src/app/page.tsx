import Hero from "@/components/Hero";
import SectionContainer from "@/components/SectionContainer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <main className="mx-4 py-16 md:py-36">
        <SectionContainer id="hero">
          <Hero />
        </SectionContainer>
      </main>

      <div className="space-y-24 mx-4">
        <SectionContainer id="experience">
          <ScrollReveal>
            <h2 className="flex items-center mb-6 text-3xl gap-x-3 text-accent-blue drop-shadow-glow">
              <img src="/icons/code.png" alt="experience" className="w-8" />
              Experiencia
            </h2>
          </ScrollReveal>
          <Experience />
        </SectionContainer>

        <SectionContainer id="education">
          <ScrollReveal>
            <h2 className="flex items-center mb-6 text-3xl gap-x-3 text-accent-blue drop-shadow-glow">
              <img src="/icons/code.png" alt="education" className="w-8" />
              Educación
            </h2>
          </ScrollReveal>
          <Education />
        </SectionContainer>

        <SectionContainer id="projects">
          <ScrollReveal>
            <h2 className="flex items-center mb-6 text-3xl gap-x-3 text-accent-blue drop-shadow-glow">
              <img src="/icons/code.png" alt="code" className="w-8" />
              Proyectos
            </h2>
          </ScrollReveal>
          <Projects />
        </SectionContainer>

        <SectionContainer id="about-me">
          <ScrollReveal>
            <h2 className="flex items-center mb-6 text-3xl gap-x-3 text-accent-blue drop-shadow-glow">
              <img src="/icons/userCheck.png" alt="user" className="w-8" />
              Sobre mí
            </h2>
          </ScrollReveal>
          <AboutMe />
        </SectionContainer>
      </div>
    </>
  );
}
