import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      id: 1,
      image: "https://lamdec.org/dash.png",
      title: "CredRank",
      description:
        "Dashboard interativo para visualização da análise, classificação e ordenação dos devedores da capital do Rio de Janeiro.",
      date: "Jan. 2024",
    },
    {
      id: 2,
      image: "https://lamdec.org/dash.png",
      title: "ExxonMobil",
      description:
        "Dashboard interativo para visualização da análise, classificação e ordenação dos devedores da capital do Rio de Janeiro.",
      date: "Jan. 2024",
    },
    {
      id: 3,
      image: "https://lamdec.org/dash.png",
      title: "PGM ChatBot",
      description:
        "Dashboard interativo para visualização da análise, classificação e ordenação dos devedores da capital do Rio de Janeiro.",
      date: "Jan. 2024",
    },
  ];

  return (
    <div className="flex flex-col w-full px-25 gap-15">
      <Label className="text-4xl font-bold">Projetos</Label>
      <div className="">
        <Carousel>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="basis-1/3">
                <Link to={"/"}>
                  <Card className="gap-4">
                    <img src={project.image} alt={project.title} />
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

export default Projects;
