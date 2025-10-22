import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 2rem 1rem 2rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  color: #00000;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Description = styled.p`
  color: #6b6b8c;
  font-size: 1.1rem;
  margin-top: 0.5rem;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem; // Aumentar o gap para dar mais espaço entre as colunas
  max-width: 1200px; // Adicionar largura máxima
`;

export const SectionLeft = styled.div`
  flex: 1 1 400px; // Base maior e mais específica
  max-width: 500px; // Limitar largura máxima

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    color: #6b6b8c;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.25rem;
      color: #6b6b8c;
      font-weight: 400;

      svg {
        color: #4f46e5;
        flex-shrink: 0;
      }
    }
  }
`;

export const SectionRight = styled.div`
  flex: 1 1 400px; // Base maior e mais específica
  max-width: 600px; // Limitar largura máxima
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 30vw;
  margin: 0 auto;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: white;
  border: 1px solid #ddd6fe;
  border-radius: 16px;
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.12);
  }
`;
export const StatNumber = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #733eec;
  margin-bottom: 0.3rem;
`;

export const StatLabel = styled.p`
  color: #00000;
  font-weight: 500;
  font-size: 0.95rem;
  text-align: center;
`;
