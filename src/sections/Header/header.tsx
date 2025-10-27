import { Link } from "react-router-dom";

function Header() {
  const navItems = [
    { label: "Sobre", id: "about" },
    { label: "Equipe", id: "team" },
    { label: "Projetos", id: "projects" },
    { label: "Publicações", id: "publications" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <div className="w-full flex flex-row justify-center items-center p-4 shadow-sm gap-50">
      <Link to={"/"}>
        <span className="flex flex-row gap-2 items-center">
          <img src="/v3/lamdec.png" className="w-8 h-8" />
          <div>
            <h1 className="font-semibold">LAMDEC</h1>
          </div>
        </span>
      </Link>
      <span className="flex flex-row gap-4 text-[#64748b]">
        {navItems.map((item) => (
          <a href={`/v3/#${item.id}`}>
            <h3
              key={item.id}
              className="cursor-pointer hover:text-black transition-colors"
            >
              {item.label}
            </h3>
          </a>
        ))}
      </span>
    </div>
  );
}

export default Header;
