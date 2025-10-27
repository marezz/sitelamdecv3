import type { Project, Publicacao, Equipe } from "./types";

const BASE_URL =
  "https://script.google.com/macros/s/AKfycbz7YqlUDbBnB-pZBZm_Y8WrmziztR273KI3NI2NYckYiCmMN24oKsbNBp0wH1yeM4a5/exec";

export async function fetchFromSheet<T>(tipo: string): Promise<T[]> {
  const res = await fetch(`${BASE_URL}?tipo=${tipo}`);
  if (!res.ok) throw new Error("Erro ao buscar dados");
  const json = await res.json();
  return json[tipo] || [];
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "") // remove diacríticos
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}?tipo=Projetos`);
  const json = await res.json();
  return (json.Projetos || []).map((p: any): Project => ({
    ...p,
    participants: Array.isArray(p.participants)
      ? p.participants
      : (p.participants?.split(",").map((x: string) => x.trim()) ?? []),
    id: p.id || slugify(p.slug || p.title),
  }));
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}

export async function getPublicacao(): Promise<Publicacao[]> {
  return fetchFromSheet<Publicacao>("Publicacoes");
}

export async function getEquipe(): Promise<Equipe[]> {
  return fetchFromSheet<Equipe>("Equipe");
}
