import Image from "next/image";
import Hero from "@/components/Hero";
import SectionContainer from "@/components/SectionContainer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

const SECTIONS = [
  { id: "experience", title: "Experiencia", icon: "/icons/code.png" },
  { id: "education", title: "Educación", icon: "/icons/code.png" },
  { id: "skills", title: "Stack", icon: "/icons/code.png" },
  { id: "projects", title: "Proyectos", icon: "/icons/code.png" },
  { id: "about-me", title: "Sobre mí", icon: "/icons/userCheck.png" },
  { id: "contact", title: "Contacto", icon: "/icons/mail.png" },
] as const;

const CONTENT: Record<string, React.ReactNode> = {
  experience: <Experience />,
  education: <Education />,
  skills: <Skills />,
  projects: <Projects />,
  "about-me": <AboutMe />,
  contact: <Contact />,
};

export default function Home() {
  return (
    <>
      <main className="mx-4 py-16 md:py-36">
        <SectionContainer id="hero">
          <Hero />
        </SectionContainer>
      </main>

      <div className="mx-4 space-y-24">
        {SECTIONS.map(({ id, title, icon }) => (
          <SectionContainer id={id} key={id}>
            <ScrollReveal>
              <h2 className="flex items-center mb-6 text-3xl gap-x-3 text-accent-blue drop-shadow-glow">
                <Image
                  src={icon}
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain w-8 h-8"
                />
                {title}
              </h2>
            </ScrollReveal>
            {CONTENT[id]}
          </SectionContainer>
        ))}
      </div>
    </>
  );
}
