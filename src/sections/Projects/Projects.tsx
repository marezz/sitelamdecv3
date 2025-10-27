import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useData } from "@/context/DataContext";

export default function Projects() {
  const { projects, loading } = useData();

  if (loading)
    return (
      <div className="flex flex-col gap-4 w-full px-25">
        <Label className="font-bold text-4xl">Publicações</Label>
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">Carregando publicações...</p>
        </div>
      </div>
    );
  if (projects.length === 0)
    return <div className="p-10">Nenhum projeto encontrado.</div>;

  return (
    <div className="flex flex-col w-full px-25 gap-15" id="projects">
      <Label className="text-4xl font-bold">Projetos</Label>
      <div>
        <Carousel opts={{ align: "center", dragFree: true }}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.slug} className="basis-1/3">
                <Link to={`/projetos/${project.slug}`}>
                  <Card className="gap-4 hover:-translate-y-1 hover:shadow-md transition-all">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-md h-70 w-full object-cover"
                    />
                    <Label className="font-semibold text-xl">
                      {project.title}
                    </Label>
                    <p className="text-[#6b6b8c] font-[350] text-md">
                      {project.description}
                    </p>
                    <p className="text-[#733eec] font-medium text-md">
                      {project.date}
                    </p>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
