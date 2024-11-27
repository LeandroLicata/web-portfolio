import Hero from "@/components/Hero";
import SectionContainer from "@/components/SectionContainer";
import { FaCode } from "react-icons/fa";
import { TbUserCheck } from "react-icons/tb";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <main className="mx-4">
        <SectionContainer id="hero" className="py-16 md:py-36">
          <Hero />
        </SectionContainer>
      </main>
      <div className="space-y-24 mx-4">
        <SectionContainer id="projects" className="">
          <h2 className="flex items-center mb-6 text-3xl gap-x-3 text-blue-neon">
            <FaCode className="size-7" />
            Proyectos
          </h2>
          <Projects />
        </SectionContainer>
        <SectionContainer id="about-me" className="">
          <h2 className="flex items-center mb-6 text-3xl gap-x-8 text-blue-neon">
            <TbUserCheck className="size-8" />
            Sobre mí
          </h2>
          <AboutMe />
        </SectionContainer>
      </div>
    </>
  );
}
