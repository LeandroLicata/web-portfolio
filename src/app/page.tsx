import Hero from "@/components/Hero";
import SectionContainer from "@/components/SectionContainer";

export default function Home() {
  return (
    <main className="px-4">
      <SectionContainer id="hero" className="py-16 md:py-36">
        <Hero />
      </SectionContainer>
    </main>
  );
}
