import React, { createContext, useContext, useState } from "react";
import { projects } from "../data/portifolio";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projectsData] = useState(projects);

  return (
    <ProjectsContext.Provider value={{ projects: projectsData }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);