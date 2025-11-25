import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
