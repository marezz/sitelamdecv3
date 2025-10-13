import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #101113;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 3rem 1rem 1.5rem;
  box-sizing: border-box;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
  }
`;

export const FooterSection = styled.div`
  max-width: 300px;

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #a5a5a5;
  }

  a {
    color: #c7c7c7;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2b303a;
    color: #ffffff;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-size: 1.1rem;
    transition: all 0.3s ease;

    &:hover {
      background: #3a4150;
      transform: scale(1.1);
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    color: #c7c7c7;
  }

  a {
    text-decoration: none;
    color: #c7c7c7;
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #2b303a;
  padding-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #aaaaaa;
`;
