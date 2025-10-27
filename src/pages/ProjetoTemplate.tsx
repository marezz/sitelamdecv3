import { useParams } from "react-router-dom";
import Header from "@/sections/Header/header";
import { Label } from "@/components/ui/label";
import { useData } from "@/context/DataContext";

export default function ProjetoTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const { projects, loading } = useData();

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <p className="text-lg text-gray-500 animate-pulse">Carregando projeto...</p>
      </div>
    );

  const projeto = projects.find((p) => p.slug === slug);
  if (!projeto)
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <p className="text-lg text-gray-500">Projeto não encontrado.</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-0 bg-gradient-to-b from-[#f9f9ff] to-white min-h-screen">
      <Header />

      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={projeto.image}
          alt={projeto.title}
          className="w-full h-full object-cover brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            {projeto.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-10 p-10 md:px-24">
        <div className="md:col-span-2 flex flex-col gap-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {projeto.description}
          </p>

          <div className="h-[1px] w-full bg-gray-200 my-2" />

          <div className="prose max-w-none text-justify text-gray-800 leading-relaxed">
            {projeto.content || (
              <p className="italic text-gray-500">
                Este projeto ainda não possui conteúdo detalhado.
              </p>
            )}
          </div>
        </div>

        {/* Coluna lateral */}
        <aside className="flex flex-col gap-6 border-l border-gray-200 pl-6">
          <div>
            <Label className="text-[#733eec] text-sm uppercase tracking-wide font-semibold">
              Data
            </Label>
            <p className="text-gray-700 text-base">{projeto.date}</p>
          </div>

          <div>
            <Label className="text-[#733eec] text-sm uppercase tracking-wide font-semibold">
              Participantes
            </Label>
            <ul className="flex flex-wrap gap-2 mt-2">
              {projeto.participants.map((p) => (
                <li
                  key={p}
                  className="px-3 py-1 bg-[#f3f0ff] text-[#5b3de3] rounded-full text-sm font-medium"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
