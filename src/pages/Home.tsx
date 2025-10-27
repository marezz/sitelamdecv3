import About from "@/sections/About/About";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/sections/Footer/Footer";
import Header from "@/sections/Header/header";
import Hero from "@/sections/Hero/Hero";
import Projects from "@/sections/Projects/Projects";
import Publications from "@/sections/Publications/publications";
import Team from "@/sections/Team/Team";

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
