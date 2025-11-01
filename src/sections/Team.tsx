import React, { useEffect, useState } from "react";
import type { Member } from "../components/ui/interfacemember";
import { getEquipe } from "../data/api";

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
      <section
        id="team"
        className="min-h-screen w-full px-4 py-16 bg-slate-50 flex flex-col justify-center text-center"
      >
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Nossa Equipe</h2>
          <p className="text-gray-500 text-lg mt-2">Carregando equipe...</p>
        </div>
      </section>
    );
  }

  return (
    <section
  id="team"
  className="min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-25 py-16 bg-slate-50 flex flex-col justify-center text-center"
>
  {/* Header */}
  <div className="mb-12">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center leading-tight">Nossa Equipe</h2>
    <p className="text-gray-500 text-base md:text-lg w-full md:w-1/2 mx-auto mt-2">
      Nossa equipe multidisciplinar combina expertise em matemática, ciência da
      computação e conhecimentos específicos de domínio para entregar soluções
      inovadoras.
    </p>
  </div>

  {/* Grid */}
  <div
    className="
      grid justify-center gap-6 mx-auto
      grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5
      max-w-[1100px]
    "
  >
    {team.map((member, index) => (
      <div
        key={index}
        className="relative flex flex-col"
        onMouseEnter={() => setHoveredMember(index)}
        onMouseLeave={() => setHoveredMember(null)}
      >
        {/* Card */}
        <div
          className="
            bg-white rounded-2xl overflow-hidden shadow-md 
            transition-all duration-200 ease-in-out 
            flex flex-col hover:-translate-y-1 hover:shadow-lg
            h-full w-full
            sm:w-[150px] md:w-[180px] lg:w-[200px]
          "
        >
          {/* Imagem 100% ocupando o card */}
          <div className="w-full aspect-square bg-gray-100 overflow-hidden">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Informações */}
          <div className="p-3 bg-gray-50 text-center">
            <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base mb-1">
              {member.name}
            </h3>
            <p className="text-indigo-600 font-medium text-xs sm:text-sm md:text-base">
              {member.role}
            </p>
          </div>
        </div>

        {/* Hover Dropdown */}
        {(member.bio || member.expertise?.length) && (
          <div
            className={`
              absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
              w-[230px] sm:w-[250px] max-w-[85vw] bg-white rounded-lg shadow-lg p-3 
              transition-all duration-200 ease-in-out z-10
              ${
                hoveredMember === index
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }
            `}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white" />

            <div className="flex flex-col gap-3">
              {member.bio && (
                <p className="text-gray-700 text-xs sm:text-sm leading-snug">
                  {member.bio}
                </p>
              )}

              {member.expertise && member.expertise.length > 0 && (
                <div className="flex flex-col gap-1">
                  <h4 className="text-gray-800 font-semibold text-xs sm:text-sm">
                    Especialidades:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-indigo-50 text-indigo-600 rounded-xl px-2 py-[2px] text-[0.65rem] sm:text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 border-t border-gray-200 pt-2">
                {member.lattes && (
                  <a
                    href={member.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Lattes"
                    className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 text-gray-600 rounded-md hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    <i className="fas fa-book text-[0.75rem] sm:text-sm"></i>
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 text-gray-600 rounded-md hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    <i className="fab fa-github text-[0.75rem] sm:text-sm"></i>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 text-gray-600 rounded-md hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    <i className="fab fa-linkedin text-[0.75rem] sm:text-sm"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</section>

  );
};

export default Team;
