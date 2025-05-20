

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Skills from "./Skills";
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
    

        {/* <div className={`transition-colors duration-500 ${activeBg} h-screen w-full`}>
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-white">{section.title}</h1>
            <p className="text-lg text-cream mt-4">{section.content}</p>
          </section>
        ))}
      </div> 

    <div className={`h-screen w-full transition-colors duration-500 ${activeBg}`}>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="h-screen flex flex-col justify-center items-center text-center"
          >
            <img src="https://via.placeholder.com/200" alt="Profile" className="rounded-full shadow-md mb-6" />
            <h1 className="text-4xl font-bold text-white">Welcome to My Portfolio</h1>
            <p className="text-cream mt-4">Scroll down to learn more about me!</p>
          </section> */}
        {/* ))} */}
      {/* </div> */}
    </>
  );
};

export default Home;
