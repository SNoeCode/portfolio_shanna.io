
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../pages/Projects";


const Home = () => {
  const [activeBg, setActiveBg] = useState("bg-red-500");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveBg(section.bg);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    {/* <div className="pt-[80px]">  */}
 <div className="flex flex-col min-h-screen">
  
      <Header />
       <Skills/>
      
       <Projects/>
 </div>
{/* </div> */}

  

   
    </>
  );
};

export default Home;
