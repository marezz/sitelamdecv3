import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 4rem 1rem;
  text-align: center;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SectionHeader = styled.div`
  margin-bottom: 3rem;
  flex: 1;
  justify-items: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1e1e1e;
`;

export const Subtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  width: 50%;
  text-align: center;
  margin-top: 0.5rem;
`;

export const TeamGrid = styled.div`
  display: grid;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  grid-template-columns: repeat(5, 12rem);
  max-width: calc(260px * 4 + 2rem * 3);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 240px);
    max-width: calc(240px * 3 + 2rem * 2);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 200px);
    max-width: calc(200px * 2 + 2rem * 1);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 1.2rem;
  }
`;

export const MemberCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1100px) {
    height: 330px;
  }

  @media (max-width: 768px) {
    height: 280px;
  }

  @media (max-width: 480px) {
    height: 260px;
    width: 90%;
    margin: 0 auto;
  }
`;

export const MemberImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MemberInfo = styled.div`
  padding: 1rem;
  max-height: 10rem;
  text-align: center;
  background: #f9fafb;

  h3 {
    font-size: clamp(0.5rem, 5vw, 0.95rem);
    width: 100%;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.35rem;
  }

  .member-role {
    color: #4f46e5;
    font-weight: 500;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
    .member-role {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 0.95rem;
    }
    .member-role {
      font-size: 0.8rem;
    }
  }
`;

export const HoverCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HoverCardDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 270px;
  max-width: 85vw;
  background: white;
  border-radius: 10px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
  padding: 0.85rem;
  margin-top: 0.35rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.18s ease, visibility 0.18s ease;
  z-index: 10;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  &::before {
    content: "";
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid white;
  }
`;


export const HoverCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HoverCardBio = styled.p`
  font-size: 0.85rem;
  color: #374151;
  line-height: 1.3;
  margin: 0;
`;

export const HoverCardExpertise = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HoverCardTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

export const HoverCardBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.18rem 0.6rem; 
  background: #eff6ff;
  color: #4f46e5;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 500;
`;


export const HoverCardLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: #f3f4f6;
    color: #4b5563;
    transition: all 0.18s;
    text-decoration: none;

    &:hover {
      background: #4f46e5;
      color: white;
      transform: translateY(-2px);
    }

    i {
      font-size: 0.9rem;
    }
  }
`;
