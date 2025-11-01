import styled from "styled-components";

export const Section = styled.section`
  min-height: 80vh;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f3ff, #e0e7ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SectionHeader = styled.div`
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e1e1e;
`;

export const Subtitle = styled.p`
  color: #64748b;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
