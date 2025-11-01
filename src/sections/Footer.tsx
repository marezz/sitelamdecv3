import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#101113] text-white flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-[1200px] flex flex-col">
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8
            text-center sm:text-center lg:text-left
          "
        >
          <div className="max-w-[300px] mx-auto lg:mx-0">
            <h3 className="text-2xl font-bold mb-2">LAMDEC</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Laboratório de Métodos de Suporte à Tomada de Decisão
            </p>
            {/* Social links removidos*/}
            {/* 
            <div className="flex gap-4 mt-4 justify-center lg:justify-start">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-[#2b303a] text-white rounded-full hover:bg-[#3a4150] transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-[#2b303a] text-white rounded-full hover:bg-[#3a4150] transition-transform hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
            */}
          </div>

          <div className="max-w-[300px] mx-auto lg:mx-0">
            <h4 className="text-lg font-semibold mb-3">Links Rápidos</h4>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pesquisa
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Equipe
                </a>
              </li>
            </ul>
          </div>

          <div className="max-w-[300px] mx-auto lg:mx-0">
            <h4 className="text-lg font-semibold mb-3">Áreas de Pesquisa</h4>
            <ul className="list-none space-y-2 text-gray-400 text-sm">
              <li>Métodos de Suporte à Decisão</li>
              <li>Otimização</li>
              <li>Análise de Dados</li>
              <li>Pesquisa Aplicada</li>
            </ul>
          </div>

          <div className="max-w-[300px] mx-auto lg:mx-0">
            <h4 className="text-lg font-semibold mb-3">Contato</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              lamdec@im.ufrj.br
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              UFRJ - CT, Ilha do Fundão
              <br />
              Rio de Janeiro, RJ - Brasil
            </p>
          </div>
        </div>

        <div className="border-t border-[#2b303a] pt-4 text-center text-gray-500 text-sm">
          <p>&copy; 2025 LAMDEC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
