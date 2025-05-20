import React from 'react';
import { useProjects } from '../context/ProjectsContext';

const Projects = () => {
  const { projects } = useProjects();

  return (
    <section className="min-h-screen p-10 bg-cream text-gray-900">
      <img src="https://via.placeholder.com/200" alt="Projects Pic" className="mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-4 rounded shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
