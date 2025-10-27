import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useData } from "@/context/DataContext";
import type { Publicacao } from "@/data/types";

export default function Publications() {
  const { publicacoes, loading } = useData();

  if (loading) {
    return (
      <div className="flex flex-col gap-4 w-full px-25">
        <Label className="font-bold text-4xl">Pesquisa</Label>
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">Carregando publicações...</p>
        </div>
      </div>
    );
  }

  if (!publicacoes || publicacoes.length === 0) {
    return (
      <div className="flex flex-col gap-4 w-full px-25">
        <Label className="font-bold text-4xl">Publicações</Label>
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">
            Nenhuma publicação encontrada.
          </p>
        </div>
      </div>
    );
  }

  // Agrupar por ano
  const publicacoesPorAno = publicacoes.reduce(
    (acc: Record<string, Publicacao[]>, pub) => {
      const ano = pub.ano.toString();
      if (!acc[ano]) acc[ano] = [];
      acc[ano].push(pub);
      return acc;
    },
    {}
  );

  const anos = Object.keys(publicacoesPorAno).sort((a, b) => {
    const aNum = Number(a);
    const bNum = Number(b);

    const aIsNum = !isNaN(aNum);
    const bIsNum = !isNaN(bNum);

    if (aIsNum && bIsNum) return bNum - aNum;
    if (aIsNum && !bIsNum) return -1;
    if (!aIsNum && bIsNum) return 1;
    return a.localeCompare(b);
});
  const anoMaisRecente = anos[0] || "";

  return (
    <div
      id="publications"
      className="flex flex-col gap-4 px-25 overflow-x-auto w-full transition-all"
    >
      <Label className="flex flex-row font-bold text-4xl w-full">
        Pesquisas
      </Label>
      <Accordion
        type="single"
        collapsible
        defaultValue={anoMaisRecente}
        className="h-fit p-5"
        orientation="horizontal"
      >
        {anos.map((ano) => (
          <AccordionItem key={ano} value={ano} className="h-fit">
            <AccordionTrigger className="text-xl">{ano}</AccordionTrigger>
            <AccordionContent className="grid grid-cols-3 w-full h-fit py-4 gap-4">
              {publicacoesPorAno[ano].map((pub, idx) => (
                <Card
                  key={idx}
                  className="flex flex-col p-6 gap-4 hover:-translate-y-1 hover:shadow-sm transition-all"
                >
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-3 hover:opacity-80 transition-opacity"
                  >
                    <Label className="font-semibold text-base hover:cursor-pointer line-clamp-2">
                      {pub.titulo}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {pub.autores}
                    </p>
                    <p className="text-sm text-accent font-medium">
                      {pub.revista}
                    </p>
                    <span className="text-xs text-muted-foreground mt-1">
                      {pub.categoria}
                    </span>
                  </a>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
