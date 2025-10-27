import { ArrowUp } from "lucide-react";
import { Button } from "./components/ui/button";
import AppRoutes from "./routes/Routes";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <AppRoutes />
      <Button
        className="rounded-full w-10 fixed bottom-8 right-8 z-50 hover:cursor-pointer shadow-xs bg-white"
        size={"lg"}
        variant={"secondary"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="text-[#733eec] w-full h-full" />
      </Button>
    </DataProvider>
  );
}

export default App;
