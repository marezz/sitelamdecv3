import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Team from "./sections/Team/Team";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center gap-4">
      <Hero/>
      <About />
      <Team />
    </div>
  );
}

export default App;
