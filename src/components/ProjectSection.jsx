import { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const [projects, setProjects] = useState([
    {
      title: "Portfolio Website",
      description: "Built with React and Tailwind",
      techStack: ["React", "Tailwind", "JavaScript"],
      image: "https://via.placeholder.com/400x200",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Shanna's Store",
      description: "Mock store using MERN stack",
      techStack: ["React.js", "Mongo", "Express,js", "Node.js"],
      image: "https://via.placeholder.com/400x200",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "To-Do App",
      description: "Persistent task tracker with localStorage",
      techStack: ["React", "Hooks"],
      image: "https://via.placeholder.com/400x200",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Chat App",
      description: "Socket.io real-time messaging",
      techStack: ["Node.js", "Socket.io"],
      image: "https://via.placeholder.com/400x200",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Uses OpenWeatherMap API",
      techStack: ["JavaScript", "HTML", "CSS"],
      image: "https://via.placeholder.com/400x200",
      liveLink: "#",
      githubLink: "#"
    }
  ]);

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedProjects = [...projects];
      updatedProjects[index].image = reader.result;
      setProjects(updatedProjects);
    };
    if (file) reader.readAsDataURL(file);
  };

  return (
    <section className="py-8 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <ProjectCard {...project} />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, idx)}
              className="mt-2 text-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;