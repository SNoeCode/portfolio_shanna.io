import React, { createContext, useContext, useState } from 'react';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Project One',
      description: 'A short description of project one.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A short description of project two.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A short description of project three.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'A short description of project four.',
      image: 'https://via.placeholder.com/300',
    },
  ]);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);