import { useState, useEffect } from "react";
import { Project } from "../types";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Simula carregamento de dados
    setProjects([
      { id: 1, title: "Projeto 1", description: "Descrição do projeto 1" },
      { id: 2, title: "Projeto 2", description: "Descrição do projeto 2" },
    ]);
  }, []);

  return projects;
};
