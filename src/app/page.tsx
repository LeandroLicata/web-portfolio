import Hero from "@/components/Hero";
import SectionContainer from "@/components/SectionContainer";
import { FaCode } from "react-icons/fa";
import { TbUserCheck } from "react-icons/tb";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <main className="mx-4 py-16 md:py-36">
        <SectionContainer id="hero">
          <Hero />
        </SectionContainer>
      </main>

      <div className="space-y-24 mx-4">
        <SectionContainer id="projects">
          <h2 className="flex items-center mb-6 text-3xl gap-x-3 text-accent-pink drop-shadow-glow">
            <FaCode className="size-7 text-accent-green" />
            Proyectos
          </h2>
          <Projects />
        </SectionContainer>

        <SectionContainer id="about-me">
          <h2 className="flex items-center mb-6 text-3xl gap-x-3 text-accent-pink drop-shadow-glow">
            <TbUserCheck className="size-8 text-accent-green" />
            Sobre mí
          </h2>
          <AboutMe />
        </SectionContainer>
      </div>
    </>
  );
}
