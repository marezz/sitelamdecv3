function Header() {
  const navItems = [
    { label: "Sobre", id: "about" },
    { label: "Equipe", id: "team" },
    { label: "Projetos", id: "projects" },
    { label: "Publicações", id: "publications" },
    { label: "Contato", id: "contato" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="w-full flex flex-row justify-center items-center p-4 shadow-sm gap-50">
      <span className="flex flex-row gap-2 items-center">
        <img src="/lamdec.png" className="w-8 h-8" />
        <div>
          <h1 className="font-semibold">LAMDEC</h1>
        </div>
      </span>
      <span className="flex flex-row gap-4 text-[#64748b]">
        {navItems.map((item) => (
          <h3
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="cursor-pointer hover:text-black transition-colors"
          >
            {item.label}
          </h3>
        ))}
      </span>
    </div>
  );
}

export default Header;
