export interface Project {
  slug: string;
  image: string;
  title: string;
  description: string;
  date: string;
  participants: string[];
  content: string;
}

export interface Publicacao {
  titulo: string;
  ano: string;
  link: string;
  autores: string;
  revista: string;
  categoria: string;
}

export interface Equipe {
  nome: string;
  cargo: string;
  foto: string;
  descricao: string;
  expertise: string;
  linkedin: string;
  github: string;
  lattes: string;
}
