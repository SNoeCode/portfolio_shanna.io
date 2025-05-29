import { useState, useEffect, useRef } from "react";
import skillsData from "../data/skills.json"; // Import JSON properly

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    // setSkills([]);
    setSkills(skillsData.skills ? skillsData.skills : []);

    // setTimeout(() => {
    //   setSkills(skillsData.skills ? skillsData.skills : []);
    // }, 100);

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
      { threshold: 0.2 } // Adjust visibility trigger sensitivity
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []); 
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-300 to-orange-800 p-8 relative overflow-hidden">
        <h1
          style={{ fontFamily: "Oregano, cursive", fontSize: "46px" }}
          className="text-4xl font-bold mb-20 p-12 text-center text-gradient-to-b from-teal-500 to-orange-500 rounded-lg shadow-lg"
          // className="text-4xl font-bold mb-20 p-12 text-center bg-gradient-to-r from-purple-400 via-indigo-600 to-blue-500 rounded-lg shadow-lg text-white"
        >
          My Skills
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 relative w-full max-w-5xl grid-auto-rows-min overflow-hidden">
          {/* <div className={`grid ${skills.length % 4 === 0 ? "grid-cols-4" : "grid-cols-3"} gap-6 mt-10 relative w-full max-w-5xl overflow-hidden`}> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 relative w-full max-w-5xl overflow-hidden justify-center"> */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-item text-lg p-4 transition-all duration-1000 ease-out gap-10 ${
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
    </>
  );
};

export default Skills;
