import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/sections/Projects/Projects";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Projects />} path="/credrank" />
      </Routes>
    </Router>
  );
}
