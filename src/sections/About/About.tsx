import { Book, BookOpenText, Check, Database, Lamp, Lightbulb, Users } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionContent,
  SectionLeft,
  SectionRight,
  Title,
  Description,
  StatGrid,
  StatCard,
  StatNumber,
  StatLabel,
} from "./styles";
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

function About() {
  return (
    <Section id="about">
      <SectionHeader>
        <Title>Sobre o LAMDEC</Title>
        <Description>Excelência em pesquisa e inovação tecnológica</Description>
      </SectionHeader>
      <SectionContent>
        <SectionLeft>
          <h2>Nossa Missão</h2>
          <p className="text-justify">
            O LAMDEC é um laboratório de pesquisa dedicado ao desenvolvimento de
            métodos inovadores de suporte à tomada de decisão. Nossa equipe
            multidisciplinar trabalha em projetos que impactam positivamente a
            sociedade, desenvolvendo soluções tecnológicas para empresas e
            órgãos públicos.
          </p>

          <h2>Nossos Valores</h2>
          <ul>
            <li>
              <Check size={16} /> Excelência em pesquisa
            </li>
            <li>
              <Check size={16} /> Métodos de suporte à decisão
            </li>
            <li>
              <Check size={16} /> Colaboração interdisciplinar
            </li>
            <li>
              <Check size={16} /> Impacto social e empresarial
            </li>
          </ul>
        </SectionLeft>

        <SectionRight>
          <StatGrid>
            <StatCard>
              <div className="flex flex-row gap-4">
                <Users className="h-full"/>
                <StatNumber>20+</StatNumber>
              </div> 
              <StatLabel>Membros da Equipe</StatLabel>
            </StatCard>

            <StatCard>
              <div className="flex flex-row gap-4">
                <Lightbulb className="h-full"/>
                <StatNumber>15+</StatNumber>
              </div> 
              <StatLabel>Projetos</StatLabel>
            </StatCard>

            <StatCard>
              <div className="flex flex-row gap-4">
                <Database className="h-full"/>
                <StatNumber>10+</StatNumber>
              </div> 
              <StatLabel>Anos de Atuação</StatLabel>
            </StatCard>

            <StatCard>
              <div className="flex flex-row gap-4">
                <BookOpenText className="h-full"/>
                <StatNumber>30+</StatNumber>
              </div>
              <StatLabel>Publicações</StatLabel>
            </StatCard>
          </StatGrid>
        </SectionRight>
      </SectionContent>

      <Carousel
        className="w-full pt-30 pb-10 w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-10 justify-center w-full">
          {logos.map((src, index) => (
            <CarouselItem key={index} className="flex-[0_0_20%]">
              <img
                src={src}
                alt={`logo-${index}`}
                className="h-32 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
}

export default About;
