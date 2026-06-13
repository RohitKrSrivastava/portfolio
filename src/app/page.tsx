import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { TechMarquee } from "@/components/Expertise";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Experience } from "@/components/Experience";
import { Education, Certifications } from "@/components/Education";
import { Skills, Languages } from "@/components/Skills";
import { Contact, Footer } from "@/components/Contact";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TechMarquee />
        <About />
        <Expertise />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
