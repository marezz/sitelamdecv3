// src/context/DataContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Project, Publicacao, Equipe } from "@/data/types";
import { getProjects, getPublicacao, getEquipe } from "@/data/api";

type DataContextType = {
  projects: Project[];
  publicacoes: Publicacao[];
  equipe: Equipe[];
  loading: boolean;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [publicacoes, setPublicacoes] = useState<Publicacao[]>([]);
  const [equipe, setEquipe] = useState<Equipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      try {
        const [projectsData, publicacoesData, equipeData] = await Promise.all([
          getProjects(),
          getPublicacao(),
          getEquipe(),
        ]);
        setProjects(projectsData);
        setPublicacoes(publicacoesData);
        setEquipe(equipeData);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  return (
    <DataContext.Provider value={{ projects, publicacoes, equipe, loading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData deve ser usado dentro de DataProvider");
  return ctx;
}
