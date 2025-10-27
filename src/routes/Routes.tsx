import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import ProjetoTemplate from "@/pages/ProjetoTemplate";
export default function AppRoutes() {
  return (
    <Router basename="/v3">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="/projetos/:slug" element={<ProjetoTemplate />} />
      </Routes>
    </Router>
  );
}
