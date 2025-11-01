import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones bonitos e leves

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Sobre", id: "about" },
    { label: "Pesquisa", id: "publications" },
    { label: "Projetos", id: "projects" },
    { label: "Equipe", id: "team" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header className="w-full flex flex-row justify-between items-center px-6 md:px-12 py-4 shadow-sm bg-white sticky top-0 z-50">
      <Link to={"/"}>
        <span className="flex flex-row gap-2 items-center">
          <img src="/v3/lamdec.png" className="w-8 h-8" />
          <h1 className="font-semibold text-lg">LAMDEC</h1>
        </span>
      </Link>

      <nav className="hidden md:flex flex-row gap-8 text-[#64748b]">
        {navItems.map((item) => (
          <a key={item.id} href={`/v3/#${item.id}`}>
            <h3 className="cursor-pointer hover:text-black transition-colors">
              {item.label}
            </h3>
          </a>
        ))}
      </nav>

      {/* Botão menu hamburguer */}
      <button
        className="md:hidden flex items-center justify-center text-[#64748b] hover:text-black transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Menu hamburguer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/v3/#${item.id}`}
              className="text-[#64748b] hover:text-black transition-colors text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
