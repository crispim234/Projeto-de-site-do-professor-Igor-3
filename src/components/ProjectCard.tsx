import React from "react";
import { Project } from "../types";
import { useTheme } from "../context/ThemeContext";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { state } = useTheme();
  return (
    <div
      className={`${styles.card} ${state.theme === "Dark" ? styles.dark : ""}`}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
