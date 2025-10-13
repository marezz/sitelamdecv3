import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Team from "./sections/Team/Team";
import Header from "./sections/Header/header";
import Footer from "./sections/Footer/footer";
import { Button } from "./components/ui/button";
import { ArrowUp } from "lucide-react";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center gap-4">
      <Header />
      <Hero />
      <About />
      <Team />
      <Button
        className="rounded-full w-10 fixed bottom-8 right-8 z-50 hover:cursor-pointer"
        size={"lg"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp />
      </Button>
      <Footer/>
    </div>
  );
}

export default App;
