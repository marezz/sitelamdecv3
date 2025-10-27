import { useParams } from "react-router-dom";
import Header from "@/sections/Header/header";
import { Label } from "@/components/ui/label";
import { useData } from "@/context/DataContext";

export default function ProjetoTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const { projects, loading } = useData();
  console.log("projects:", projects, "slug:", slug);

  if (loading) return <div className="p-10">Carregando...</div>;

  const projeto = projects.find((p) => p.slug === slug);
  if (!projeto) return <div className="p-10">Projeto não encontrado.</div>;

  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="flex flex-col p-10 gap-10">
        <img
          src={projeto.image}
          alt={projeto.title}
          className="h-100 object-cover rounded-md"
        />
        <div className="grid grid-cols-2 py-2">
          <div className="flex flex-col gap-4">
            <Label className="font-bold text-4xl">{projeto.title}</Label>
            <p className="text-xl font-[350]">{projeto.description}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-[#733eec] font-medium text-md">
              Data: {projeto.date}
            </p>
            <Label className="text-xl font-normal">Participantes</Label>
            <ul className="flex gap-1 flex-wrap justify-end">
              {projeto.participants.map((p) => (
                <li
                  key={p}
                  className="px-4 border rounded-full text-[#6b6b8c] shadow-xs"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-justify">{projeto.content}</p>
      </div>
    </div>
  );
}
