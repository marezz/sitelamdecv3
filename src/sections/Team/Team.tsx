import React, { useEffect, useState } from "react";
import type { Member } from "../../components/ui/interfacemember";
import { getEquipe } from "../../data/api";
import {
  Section,
  SectionHeader,
  Title,
  Subtitle,
  TeamGrid,
  MemberCard,
  MemberImage,
  MemberInfo,
  HoverCardContainer,
  HoverCardDropdown,
  HoverCardContent,
  HoverCardBio,
  HoverCardExpertise,
  HoverCardTitle,
  HoverCardBadges,
  Badge,
  HoverCardLinks,
} from "./styles";

const Team: React.FC = () => {
  const [team, setTeam] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getEquipe();

        const formatted = data.map((m: any) => ({
          name: m.nome,
          role: m.cargo,
          photo: m.foto || "/placeholder.jpg",
          bio: m.descricao,
          expertise:
            typeof m.expertise === "string"
              ? m.expertise
                  .split(/[|]/) 
                  .map((e: string) => e.trim())
                  .filter(Boolean)
              : [],
          linkedin: m.linkedin,
          github: m.github,
          lattes: m.lattes,
        }));

        setTeam(formatted);
      } catch (error) {
        console.error("Erro ao carregar equipe:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <Section id="team">
        <SectionHeader>
          <Title>Nossa Equipe</Title>
          <Subtitle>Carregando equipe...</Subtitle>
        </SectionHeader>
      </Section>
    );
  }

  return (
    <Section id="team">
      <SectionHeader>
        <Title>Nossa Equipe</Title>
        <Subtitle>
          Nossa equipe multidisciplinar combina expertise em matemática, ciência
          da computação e conhecimentos específicos de domínio para entregar
          soluções inovadoras.
        </Subtitle>
      </SectionHeader>

      <TeamGrid>
        {team.map((member, index) => (
          <HoverCardContainer
            key={index}
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <MemberCard>
              <MemberImage>
                <img src={member.photo} alt={member.name} />
              </MemberImage>

              <MemberInfo>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </MemberInfo>
            </MemberCard>

            {(member.bio || member.expertise?.length) && (
              <HoverCardDropdown
                className={hoveredMember === index ? "visible" : ""}
              >
                <HoverCardContent>
                  {member.bio && <HoverCardBio>{member.bio}</HoverCardBio>}

                  {member.expertise && member.expertise.length > 0 && (
                    <HoverCardExpertise>
                      <HoverCardTitle>Especialidades:</HoverCardTitle>
                      <HoverCardBadges>
                        {member.expertise.map((skill, i) => (
                          <Badge key={i}>{skill}</Badge>
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