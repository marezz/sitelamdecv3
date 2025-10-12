import React, { useState } from "react";
import { members } from "../../components/membros/members";
import type { Member } from "../../components/ui/interfacemember";
import {  Section, SectionHeader, Title, Subtitle,
  TeamGrid, MemberCard, MemberImage, MemberInfo, HoverCardContainer, HoverCardDropdown, HoverCardContent, HoverCardBio, HoverCardExpertise, HoverCardTitle, HoverCardBadges, Badge, HoverCardLinks } from "./styles";

interface TeamProps {
  title?: string;
  subtitle?: string;
  data?: Member[];
}

const Team: React.FC<TeamProps> = ({
  title = "Nossa Equipe",
  subtitle = "Nossa equipe multidisciplinar combina expertise em matemática, ciência da computação e conhecimentos específicos de domínio para entregar soluções inovadoras.",
  data = members,
}) => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <Section>
      <SectionHeader>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </SectionHeader>

      <TeamGrid>
        {data.map((member, index) => (
          <HoverCardContainer
            key={index}
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <MemberCard>
              <MemberImage>
                <img
                  src={member.photo}
                  alt={member.name}
                />
               
              </MemberImage>

              <MemberInfo>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </MemberInfo>
            </MemberCard>

            {(member.bio || member.expertise) && (
              <HoverCardDropdown
                className={hoveredMember === index ? "visible" : ""}
              >
                <HoverCardContent>
                  {member.bio && <HoverCardBio>{member.bio}</HoverCardBio>}

                  {member.expertise && member.expertise.length > 0 && (
                    <HoverCardExpertise>
                      <HoverCardTitle>Especialidades:</HoverCardTitle>
                      <HoverCardBadges>
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex}>{skill}</Badge>
                        ))}
                      </HoverCardBadges>
                    </HoverCardExpertise>
                  )}

                  <HoverCardLinks>
                    {member.lattes && (
                      <a
                        href={member.lattes}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Lattes"
                      >
                        <i className="fas fa-book"></i>
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                  </HoverCardLinks>
                </HoverCardContent>
              </HoverCardDropdown>
            )}
          </HoverCardContainer>
        ))}
      </TeamGrid>
    </Section>
  );
};

export default Team;
