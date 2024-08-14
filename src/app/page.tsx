import Hero from "@/components/Hero";
import SectionContainer from "@/components/SectionContainer";
import { FaCode } from "react-icons/fa";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main className="px-4">
        <SectionContainer id="hero" className="py-16 md:py-36">
          <Hero />
        </SectionContainer>
      </main>
      <div className="space-y-24">
        <SectionContainer id="projects" className="">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white">
            <FaCode className="size-7" />
            Proyectos
          </h2>
          <Projects />
        </SectionContainer>
      </div>
    </>
  );
}
