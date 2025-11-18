import React from "react";
import { useProjects } from "../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.css";

const ProjectList: React.FC = () => {
  const projects = useProjects();
  return (
    <div className={styles.projectList}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
