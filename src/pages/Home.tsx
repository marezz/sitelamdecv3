import { Button } from "@/components/ui/button";
import About from "@/sections/About/About";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/sections/Footer/Footer";
import Header from "@/sections/Header/header";
import Hero from "@/sections/Hero/Hero";
import Projects from "@/sections/Projects/Projects";
import Publications from "@/sections/Publications/publications";
import Team from "@/sections/Team/Team";
import { ArrowUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center gap-20">
      <Header />
      <Hero />
      <About />
      <Publications />
      <Projects />
      <Team />
      <Button
        className="rounded-full w-10 fixed bottom-8 right-8 z-50 hover:cursor-pointer shadow-xs bg-white"
        size={"lg"}
        variant={"outline"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="text-[#733eec] w-full h-full" />
      </Button>
      <Contact />
      <Footer />
    </div>
  );
}
