const ProjectCard = ({ title, description, image, techStack = [], liveLink, githubLink }) => {
  return (
    <div className="w-full sm:w-72 bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-xs text-gray-700 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-between">
          <a href={liveLink} target="_blank" className="text-blue-500 text-sm hover:underline">
            Live
          </a>
          <a href={githubLink} target="_blank" className="text-blue-500 text-sm hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
