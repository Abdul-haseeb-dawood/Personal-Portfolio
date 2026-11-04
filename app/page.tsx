import { Navbar } from "@/components/navbar";
import { AnimatedBackground } from "@/components/animated-backgound";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/exprience";
import { Projects } from "@/components/sections/project";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contect";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
