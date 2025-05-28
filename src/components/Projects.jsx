import React from "react";
import { useProjects } from "../context/ProjectsContext";

const Projects = () => {
  const { projects } = useProjects();

  return (
    <>
      <section
        id="projects"
        className="min-h-screen p-100 bg-gray-900 text-white flex flex-col items-center"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* <h2 className="text-7xl font-bold text-teal-400 mb-50">Projects</h2>
           */}
          <h2 className="text-7xl font-bold text-teal-400 mb-216">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-80"
              >
                <img
                  src={project.image || "/images/projectimg1.png"}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-900"
                  >
                    Live Preview
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    GITHUB Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
