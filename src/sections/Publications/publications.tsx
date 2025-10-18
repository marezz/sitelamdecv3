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
  ano: number;
  link: string;
  autores: string;
  local: string;
}

const publicacoes: Publicacao[] = [
  {
    titulo:
      "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models.",
    ano: 2025,
    link: "https://google.com",
    autores: "Cunha, I. C., Silva, R. S.",
    local:
      "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models. Journal of Econometrics and Statistics, Vol. 5, Nº 1, 89-106",
  },
  {
    titulo:
      "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models.",
    ano: 2025,
    link: "https://google.com",
    autores: "Cunha, I. C., Silva, R. S.",
    local:
      "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models. Journal of Econometrics and Statistics, Vol. 5, Nº 1, 89-106",
  },
  {
    titulo:
      "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models.",
    ano: 2025,
    link: "https://google.com",
    autores: "Cunha, I. C., Silva, R. S.",
    local:
      "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models. Journal of Econometrics and Statistics, Vol. 5, Nº 1, 89-106",
  },
  {
    titulo:
      "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models.",
    ano: 2025,
    link: "https://google.com",
    autores: "Cunha, I. C., Silva, R. S.",
    local:
      "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models. Journal of Econometrics and Statistics, Vol. 5, Nº 1, 89-106",
  },
  {
    titulo:
      "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models.",
    ano: 2025,
    link: "https://google.com",
    autores: "Cunha, I. C., Silva, R. S.",
    local:
      "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models. Journal of Econometrics and Statistics, Vol. 5, Nº 1, 89-106",
  },
];

function Publications() {
  // Agrupar publicações por ano
  const publicacoesPorAno = publicacoes.reduce((acc, pub) => {
    if (!acc[pub.ano]) acc[pub.ano] = [];
    acc[pub.ano].push(pub);
    return acc;
  }, {} as Record<number, Publicacao[]>);

  const anos = Object.keys(publicacoesPorAno)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div
      id="projects"
      className="flex flex-col gap-4 w-full px-25 overflow-x-auto"
    >
      <Label className="font-bold text-4xl">Publicações</Label>
      <Accordion type="multiple" className="h-fit" orientation="horizontal">
        {anos.map((ano) => (
          <AccordionItem key={ano} value={ano.toString()} className="h-fit">
            <AccordionTrigger>{ano}</AccordionTrigger>
            <AccordionContent className="w-full h-fit">
              <Carousel>
                <CarouselContent className="grid grid-cols-3 w-full">
                  {publicacoesPorAno[ano].map((pub, idx) => (
                    <CarouselItem key={idx}>
                      <Card className="flex flex-col p-6 gap-3">
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
                            {pub.local}
                          </p>
                        </a>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Publications;
