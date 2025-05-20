// import { useState, useEffect, useRef } from "react";
// import axios from 'axios'
// import skillsData from "../data/skills.json";

// const Skills = () => {
//   const [skills, setSkills] = useState([]); // Store fetched skills
//   const [visible, setVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {

//     useEffect(() => {
//       console.log(skillsData)
//     setSkills(skillsData); // Load data from JSON file
//   }, []);



//     // Intersection Observer for scroll-triggered animation
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div id="about-me" ref={ref} className="min-h-screen flex items-center justify-center text-white">
//        <div className="grid grid-cols-2 gap-4">
//          {skills.map((skill, index) => (
//           <div
//             key={skill}
//             className={`text-2xl font-bold opacity-0 transform transition-all duration-1000 ${
//               visible ? "opacity-100 translate-y-0" : "translate-y-10"
//             }`}
//             style={{ transitionDelay: `${index * 200}ms` }}
//           >
//             {skill}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

// import { useState, useEffect } from "react";
// import skillsData from "../data/skills.json"; // Import directly

// const Skills = () => {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     setSkills(skillsData); // Load data from JSON file
//   }, []);

//   return (
//     <div id="about-me" className="min-h-screen flex items-center justify-center text-white">
//       <div className="grid grid-cols-2 gap-4">
//         {skills.map((skill, index) => (
//           <div
//             key={skill}
//             className="text-2xl font-bold opacity-100 transition-all duration-1000"
//             style={{ transitionDelay: `${index * 200}ms` }}
//           >
//             {skill}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

// import { useState, useEffect,useRef } from "react";
// import skillsData from "../data/skills.json"; // Import directly

// const Skills = () => {
//   const [skills, setSkills] = useState([]);
//    const [visible, setVisible] = useState(false);
//    const ref = useRef(null);
//  useEffect(() => {
//   setSkills(skillsData.skills ? skillsData.skills : []); // Ensuring skills are set properly

//   // Intersection Observer for scroll-triggered animation
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

// // useEffect(() => {
// //   const observer = new IntersectionObserver(
// //     ([entry]) => {
// //       setVisible(entry.isIntersecting); // Resets when scrolling off
// //     },
// //     { threshold: 0.1 } // Activates when even 10% is visible
// //   );

// //   if (ref.current) observer.observe(ref.current);
// //   return () => observer.disconnect();
// // }, []);

//   return (
//     <>
//     <h1>My Skills</h1>
//    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//   {skills.map((skill, index) => (
//     <div
//       key={skill}
//       className={`text-sm font-semibold p-2 rounded-lg shadow-md transition-all duration-1000 ${
//         visible ? "opacity-100 translate-y-0 scale-105" : "opacity-0 translate-y-10 scale-90"
//       } ${
//         index % 4 === 0 ? "bg-red-600" :
//         index % 4 === 1 ? "bg-blue-600" :
//         index % 4 === 2 ? "bg-green-600" :
//         "bg-yellow-600"
//       }`}
//       style={{ transitionDelay: `${index * 100}ms` }}
//     >
//       {skill}
//     </div>
//   ))}
// </div>

//         </>
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
    // Ensure JSON is properly set to state
    setSkills(skillsData.skills ? skillsData.skills : []);

    // Intersection Observer to trigger animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setSkills([]); // Reset when scrolling off
          setTimeout(() => setSkills(skillsData.skills), 200); // Repopulate on scroll back in
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" ref={ref} className="min-h-screen flex items-center justify-center text-white p-8">
      <h1 className="text-3xl font-bold mb-6">My Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className={`text-sm font-Trickster p-3 rounded-lg shadow-md transition-all duration-1000 ${visible ? "opacity-100 translate-y-0 scale-105" : "opacity-0 translate-y-10 scale-90"
              } ${index % 4 === 0 ? "text-blue-300" :
                index % 4 === 3 ? "text-pink-300" :
                index % 4 === 2 ? "text-yellow-200" :
                "text-purple-300"
              }`}
            style={{ transitionDelay: `${index * 75}ms` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;