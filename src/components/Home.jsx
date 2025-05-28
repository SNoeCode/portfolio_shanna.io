

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Skills from "./Skills";
import Projects from "./Projects";
const sections = [
  { id: "about", bg: "bg-pink-900", title: "About Me", content: "Here’s a quick look at my journey..." },
  { id: "projects", bg: "bg-red-500", title: "Projects", content: "Here are my latest projects..." },
  { id: "contact", bg: "bg-mint", title: "Contact Me", content: "Get in touch with me here..." },
];


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
      <Header />
       <Skills/>
    <Projects/>
  

   
    </>
  );
};

export default Home;
