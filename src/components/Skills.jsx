// import { useState, useEffect, useRef } from "react";
// import skillsData from "../data/skills.json"; // Import JSON properly

// const Skills = () => {
//   const [skills, setSkills] = useState([]);
//   const [visible, setVisible] = useState(false);
//   const ref = useRef(null);
//   useEffect(() => {
  
//     setSkills(skillsData.skills ? skillsData.skills : []);


//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setSkills([]);
//           setTimeout(() => setSkills(skillsData.skills), 100);
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       },
//       { threshold: 0.2 } // Adjust visibility trigger sensitivity
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []); 
//   return (
//     <>
//       {/* <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-300 to-orange-800 p-8 relative overflow-hidden"> */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 w-full max-w-6xl mx-auto justify-items-center">

//         <h1
//           style={{ fontFamily: "Oregano, cursive", fontSize: "46px" }}
//           className="text-4xl font-bold mb-20 p-12 text-center text-gradient-to-b from-teal-500 to-orange-500 rounded-lg shadow-lg"
          
//         >
//           My Skills
//         </h1>


//         {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 relative w-full max-w-5xl grid-auto-rows-min overflow-hidden"> */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 w-full max-w-6xl mx-auto">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className={`skill-item text-lg p-4 transition-all duration-1000 ease-out gap-10 ${
//                 visible
//                   ? "opacity-100 translate-y-0 scale-105"
//                   : "opacity-100 translate-y-10 scale-90"
//               } ${
//                 index % 5 === 0
//                   ? "text-teal-900"
//                   : index % 4 === 3
//                   ? "text-teal-900"
//                   : index % 3 === 2
//                   ? "text-pink-900"
//                   : index % 2 === 1
//                   ? "text-sky-900"
//                   : "text-violet-900"
//               }`}
//               style={{
//                 animationDelay: `${index * 300}ms`,
//                 fontFamily: "Oregano, cursive",
//                 fontSize: "26px",
//               }}
//             >
//               {skill}
//             </div> */}
//             <div
//   key={index}
//   className={`skill-item text-center text-lg p-4 transition-all duration-1000 ease-out gap-10 ${
//     visible
//       ? "opacity-100 translate-y-0 scale-105"
//       : "opacity-100 translate-y-10 scale-90"
//   } ${
//     index % 5 === 0
//       ? "text-teal-900"
//       : index % 4 === 3
//       ? "text-teal-900"
//       : index % 3 === 2
//       ? "text-pink-900"
//       : index % 2 === 1
//       ? "text-sky-900"
//       : "text-violet-900"
//   }`}
//   style={{
//     animationDelay: `${index * 300}ms`,
//     fontFamily: "Oregano, cursive",
//     fontSize: "26px",
//   }}
// >
//   {skill}
// </div>

//           ))}
//         </div> 
//       </div>
//     </>
//   );
// };

// export default Skills;
import { useState, useEffect, useRef } from "react";
import skillsData from "../data/skills.json"; // Import JSON properly

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setSkills(skillsData.skills || []);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkills([]);
          setTimeout(() => setSkills(skillsData.skills), 100);
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-300 to-pink-800 p-8 relative overflow-hidden"
    >
      {/* Heading */}
      <h1
        style={{ fontFamily: "Oregano, cursive", fontSize: "46px" }}
        className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-b from-teal-900 to-pink-900"
      >
        My Techinical Skills
      </h1>

  
     <div className="flex justify-center align-middle text-center w-full">
{/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full max-w-6xl mx-auto ml-[200px] px-4"> */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full max-w-6xl mx-auto translate-x-[-100px] px-4">
       {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full max-w-6xl mx-auto px-4 text-"> */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-item text-center text-lg p-4 transition-all duration-1000 ease-out ${
              visible
                ? "opacity-100 translate-y-0 scale-105"
                : "opacity-100 translate-y-10 scale-90"
            } ${
              index % 5 === 0
                ? "text-teal-900"
                : index % 4 === 3
                ? "text-teal-900"
                : index % 3 === 2
                ? "text-pink-900"
                : index % 2 === 1
                ? "text-sky-900"
                : "text-violet-900"
            }`}
            style={{
              animationDelay: `${index * 300}ms`,
              fontFamily: "Oregano, cursive",
              fontSize: "26px",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;
