import { Check } from "lucide-react";
import { Section, SectionHeader, SectionContent, SectionLeft, SectionRight, Title, Description, StatGrid, StatCard, StatNumber, StatLabel
} from "./styles";

function About() {
  return (
    <Section id="about">
      <SectionHeader>
        <Title>Sobre o LAMDEC</Title>
        <Description>
          Excelência em pesquisa e inovação tecnológica
        </Description>
      </SectionHeader>

      <SectionContent>
        <SectionLeft>
          <h2>Nossa Missão</h2>
          <p>
            O LAMDEC é um laboratório de pesquisa dedicado ao desenvolvimento
            de métodos inovadores de suporte à tomada de decisão. Nossa equipe
            multidisciplinar trabalha em projetos que impactam positivamente a
            sociedade, desenvolvendo soluções tecnológicas para empresas e órgãos
            públicos.
          </p>

          <h2>Nossos Valores</h2>
          <ul>
            <li><Check size={16} /> Excelência em pesquisa</li>
            <li><Check size={16} /> Métodos de suporte à decisão</li>
            <li><Check size={16} /> Colaboração interdisciplinar</li>
            <li><Check size={16} /> Impacto social e empresarial</li>
          </ul>
        </SectionLeft>

        <SectionRight>
          <StatGrid>
            <StatCard>
                <StatNumber>10+</StatNumber>
                <StatLabel>Projetos Concluídos</StatLabel>
            </StatCard>

            <StatCard>
                <StatNumber>3+</StatNumber>
                <StatLabel>Parceiros Estratégicos</StatLabel>
            </StatCard>

            <StatCard>
                <StatNumber>10+</StatNumber>
             <StatLabel>Membros da Equipe</StatLabel>
            </StatCard>

            <StatCard>
                <StatNumber>50+</StatNumber>
                <StatLabel>Publicações</StatLabel>
            </StatCard>
            </StatGrid>

        </SectionRight>
      </SectionContent>
    </Section>
  );
}

export default About;
