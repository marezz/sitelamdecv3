import { BookOpenText, Check, Database, Lightbulb, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Exxon_Mobil_Logo.svg/2560px-Exxon_Mobil_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Anp-logo-3.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdMbgmFrNQ2ta5jD5CckBdG6Ikh5hm9k6ZQ&s",
  "https://upload.wikimedia.org/wikipedia/commons/f/f0/UFRJ_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Exxon_Mobil_Logo.svg/2560px-Exxon_Mobil_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Anp-logo-3.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdMbgmFrNQ2ta5jD5CckBdG6Ikh5hm9k6ZQ&s",
  "https://upload.wikimedia.org/wikipedia/commons/f/f0/UFRJ_logo.svg",
];

export default function About() {
  return (
    <section id="about" className="flex flex-col bg-white w-full">
      {/* Título */}
      <div className="flex flex-col text-left gap-2 py-5 mb-14 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center leading-tight">
          Sobre o LAMDEC
        </h2>
        <p className="text-[#6b6b8c] text-base sm:text-lg md:text-xl font-[350] text-center">
          Excelência em pesquisa e inovação tecnológica
        </p>
      </div>

      {/* Infos */}
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-16 w-full px-4 sm:px-8 md:px-25">
        {/* Texto */}
        <div className="flex flex-col w-full sm:w-[90%] md:w-[520px] text-justify gap-4 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-center lg:text-left">
            Nossa Missão
          </h2>

          <p className="text-[#6b6b8c] text-lg md:text-xl font-[350]">
            O LAMDEC é um laboratório de pesquisa dedicado ao desenvolvimento de
            métodos inovadores de suporte à tomada de decisão. Nossa equipe
            multidisciplinar trabalha em projetos que impactam positivamente a
            sociedade, desenvolvendo soluções tecnológicas para empresas e órgãos
            públicos.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-center lg:text-left mt-6">
            Nossos Valores
          </h2>

          <ul className="space-y-2 text-[#6b6b8c] font-[350] leading-relaxed text-sm sm:text-base md:text-lg">
            <li className="flex items-center gap-2">
              <Check size={18} className="text-indigo-600" /> Excelência em
              pesquisa
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-indigo-600" /> Métodos de suporte
              à decisão
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-indigo-600" /> Colaboração
              interdisciplinar
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-indigo-600" /> Impacto social e
              empresarial
            </li>
          </ul>
        </div>

        {/* Cards */}
        <div className="flex-1 min-w-[320px] max-w-[600px] flex items-center justify-center w-full px-4 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px]">
            <StatCard icon={<Users />} number="15+" label="Membros da Equipe" />
            <StatCard icon={<Lightbulb />} number="3+" label="Projetos" />
            <StatCard icon={<Database />} number="3+" label="Anos de Atuação" />
            <StatCard icon={<BookOpenText />} number="15+" label="Publicações" />
          </div>
        </div>
      </div>

      <Carousel
        className="w-full pt-24 pb-12"
        plugins={[
          Autoplay({
            delay: 1800,
          }),
        ]}
      >
        <CarouselContent className="flex gap-4 justify-center w-full">
          {logos.map((src, index) => (
            <CarouselItem
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_20%] flex justify-center"
            >
              <img
                src={src}
                alt={`logo-${index}`}
                className="h-14 sm:h-16 md:h-20 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

function StatCard({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) {
  return (
    <div className="bg-white border rounded-2xl w-full h-[150px] sm:h-[180px] p-6 sm:p-10 flex flex-col items-center justify-center hover:-translate-y-1 hover:shadow-sm transition-all">
      <div className="flex flex-row gap-3 sm:gap-4 justify-between items-center mb-1 sm:mb-2">
        {icon}
        <h3 className="text-2xl sm:text-3xl font-bold text-[#733eec]">
          {number}
        </h3>
      </div>
      <p className="text-black font-medium text-sm sm:text-base text-center">
        {label}
      </p>
    </div>
  );
}
