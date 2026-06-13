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
import { WhatIDeliver } from "@/components/WhatIDeliver";
import { CoreDomains } from "@/components/CoreDomains";
import { FeaturedProjects } from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhatIDeliver />
        <Stats />
        <CoreDomains />
        <TechMarquee />
        <About />
        <FeaturedProjects />
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
