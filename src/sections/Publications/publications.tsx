import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";

interface Publicacao {
  titulo: string;
  ano: string;
  link: string;
  autores: string;
  revista: string;
  categoria: string;
}

function Publications() {
  const [publicacoes, setPublicacoes] = useState<Publicacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwFKD65hgvS8k11S_LxiYKUlmo10H1daTj66m7afdoL9QD79KCWpXIsurx1ZouQijhQ/exec"
        );
        const data = await response.json();
        setPublicacoes(data.Publicacoes || []);
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar publicações");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 w-full px-25">
        <Label className="font-bold text-4xl">Publicações</Label>
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">Carregando publicações...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4 w-full px-25">
        <Label className="font-bold text-4xl">Publicações</Label>
        <div className="flex items-center justify-center py-12">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  // Agrupar publicações por ano
  const publicacoesPorAno = publicacoes.reduce((acc, pub) => {
    const ano = pub.ano.toString();
    if (!acc[ano]) acc[ano] = [];
    acc[ano].push(pub);
    return acc;
  }, {} as Record<string, Publicacao[]>);

  const anos = Object.keys(publicacoesPorAno).sort((a, b) => {
    const aIsNumeric = !isNaN(Number(a));
    const bIsNumeric = !isNaN(Number(b));

    if (!aIsNumeric && bIsNumeric) return -1;
    if (aIsNumeric && !bIsNumeric) return 1;
    if (!aIsNumeric && !bIsNumeric) return a.localeCompare(b);

    return Number(b) - Number(a);
  });
  const anoMaisRecente = anos[0] || "";

  return (
    <div
      id="publications"
      className="flex flex-col gap-4 px-25 overflow-x-auto w-full transition-all"
    >
      <Label className="flex flex-row font-bold text-4xl w-full">
        Publicações
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
            <AccordionContent className="grid grid-cols-3 w-full h-fit gap-4">
              {publicacoesPorAno[ano].map((pub, idx) => (
                <Card key={idx} className="flex flex-col p-6 gap-4 ">
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

export default Publications;
