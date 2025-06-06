// src/components/Projects.jsx
import React, { useState } from "react";
import { useProjects } from "../context/ProjectsContext";
import ComingSoonModal from "../components/ComingSoonModal";

const Projects = () => {
  const { projects } = useProjects();
  const [showModal, setShowModal] = useState(false);

  const handleLiveClick = (livePreview) => {
    if (livePreview) {
      window.open(livePreview, "_blank");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <section
        id="projects"
        className="min-h-screen p-8 sm:p-12 lg:p-20 bg-gradient-to-br from-teal-900 pink-500 via-sky-500 to-pink-900 text-white flex flex-col items-center justify-center"
      >
        <h2 
          className="text-xl font-bold text-pink-900 mb-12 sm:mb-16 text-center"
          style={{ fontFamily: "Trickster, cursive", fontSize: "40px" }}
        >
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center w-full max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-80"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-6 shadow-lg"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-100">
                {project.name}
              </h3>
              <p className="text-cyan-200/80 mb-6 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                <button
                  onClick={() => handleLiveClick(project.livePreview)}
                  className=" hover:from-pink-600 hover:to-rose-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Live Preview
                </button>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:from-gray-700 hover:to-gray-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          ))}
        </div>

        <ComingSoonModal show={showModal} onClose={() => setShowModal(false)} />
      </section>
    </>
  );
};

export default Projects;







// // src/components/Projects.jsx
// import React, { useState } from "react";
// import { useProjects } from "../context/ProjectsContext";
// import ComingSoonModal from "../components/ComingSoonModal";
// const Projects = () => {
//   const { projects } = useProjects();
//   const [showModal, setShowModal] = useState(false);

//   const handleLiveClick = (livePreview) => {
//     if (livePreview) {
//       window.open(livePreview, "_blank");
//     } else {
//       setShowModal(true);
//     }
//   };

//   return (
//     <>
//       <section
//         id="projects"
//         className="min-h-screen p-20 bg-gray-900 text-white flex flex-col items-center justify-center"
//       >
//         <h2 className="text-5xl font-extrabold text-teal-400 mb-16">
//           Projects
//         </h2>
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center"> */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center w-full max-w-7xl mx-auto">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg w-80"
//             >
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-full h-40 object-cover rounded-md mb-6"
//               />
//               <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
//               <p className="text-gray-400 mb-6">{project.description}</p>
//               <div className="flex justify-between">
//                 <button
//                   onClick={() => handleLiveClick(project.livePreview)}
//                   // className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
//                   className="bg-pink-500 text-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-pink-600 transition duration-300"
//                 >
//                   Live Preview
//                 </button>
//                 <a
//                   href={project.sourceCode}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
//                 >
//                   GITHUB Link
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         <ComingSoonModal show={showModal} onClose={() => setShowModal(false)} />
//       </section>
//     </>
//   );
// };

// export default Projects;
