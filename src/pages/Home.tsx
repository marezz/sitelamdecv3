import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Publications from "@/sections/Publications";
import Team from "@/sections/Team";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center gap-20">
      <Header />
      <Hero />
      <About />
      <Publications />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
