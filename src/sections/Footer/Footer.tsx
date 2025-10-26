import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterBottom,
  SocialLinks,
  FooterList,
} from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <h3>LAMDEC</h3>
            <p>Laboratório de Métodos de Suporte à Tomada de Decisão</p>
            <SocialLinks>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h4>Links Rápidos</h4>
            <FooterList>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#team">Equipe</a>
              </li>
              <li>
                <a href="#publications">Publicações</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <h4>Áreas de Pesquisa</h4>
            <FooterList>
              <li>Métodos de Suporte à Decisão</li>
              <li>Otimização</li>
              <li>Análise de Dados</li>
              <li>Pesquisa Aplicada</li>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <h4>Contato</h4>
            <p>lamdec@im.ufrj.br</p>
            <p>
              UFRJ - CT, Ilha do Fundão
              <br />
              Rio de Janeiro, RJ - Brasil
            </p>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <p>&copy; 2025 LAMDEC. Todos os direitos reservados.</p>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
