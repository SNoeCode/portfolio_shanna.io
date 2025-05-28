import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Logo from '../assets/images/Dev.png'
import {
  FaMoon,
  FaSun,
  FaHome,
  FaFolderOpen,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { header, about } from "../portifolio";

const Navbar = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const [hovered, setHovered] = useState(null);

  return (
    <>
     <div className="h-[80px]"></div>
<nav className="fixed top-0 left-0 w-full h-[80px] flex items-center justify-between px-10 text-pink-400 bg-teal-900 border-b border-gray-700 bg-gradient-to-r from-gray-900 to-gray-700 z-50 shadow-xl">
  
  {/* Left Section: Logo + Resume */}
  <div className="flex items-center gap-6">
    <img src={Logo} alt="Shanna" className="h-[50px] w-[50px] rounded-lg shadow-lg object-contain"/>
    
    <a
      href={about?.resume || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="font-girassol flex shrink text-lg  text-indigo-900 border-2 px-4 py-2"
    >
      My Resume
    </a>
  </div>

  {/* Right Section: NavLinks */}
  <ul className="font-cormorant flex items-center gap-10 pr-6 text-pink-400 ">
    <li onMouseEnter={() => setHovered("home")} onMouseLeave={() => setHovered(null)}>
      <Link to="/" className="flex items-center justify-center">
        {hovered === "home" ? <span className="text-md font-semibold">Home</span> : <FaHome className="text-2xl text-cyan-400" />}
      </Link>
    </li>
    
    <li onMouseEnter={() => setHovered("projects")} onMouseLeave={() => setHovered(null)}>
      <Link to="/projects" className="flex items-center justify-center">
        {hovered === "projects" ? <span className="text-md font-semibold">Projects</span> : <FaFolderOpen className="text-2xl text-cyan-400" />}
      </Link>
    </li>

    <li onMouseEnter={() => setHovered("about")} onMouseLeave={() => setHovered(null)}>
      <Link to="/about-me" className="flex items-center justify-center">
        {hovered === "about" ? <span className="text-md font-semibold">About Me</span> : <FaUser className="text-2xl text-cyan-400" />}
      </Link>
    </li>

    <li onMouseEnter={() => setHovered("contact")} onMouseLeave={() => setHovered(null)} className="mr-4">
      <Link to="/contact" className="flex items-center justify-center">
        {hovered === "contact" ? <span className="text-md font-semibold">Contact</span> : <FaEnvelope className="text-2xl text-cyan-400" />}
      </Link>
    </li>
  </ul>
</nav>
   {/* <nav className="fixed top-0 left-0 w-full h-[80px] flex items-center justify-between px-10 text-pink-400 bg-teal-900 border-b border-gray-700 bg-gradient-to-r from-gray-900 to-gray-700 z-50 shadow-xl">

<div className="flex items-center gap-4">
  <img src={Logo} alt="Shanna" className="h-[50px] w-[50px] rounded-lg shadow-lg object-contain"/>
</div>


  <div className="flex items-center gap-10">
 

    <a
      href={about?.resume || "#"}
      target="_blank"
      rel="noopener noreferrer"
     className="font-girassol text-xl hover:text-zinc-300 text-indigo-900 bg-teal-800 border-2 border-indigo-600 px-4 py-2 rounded-md transition-all duration-300"
  >
    My Resume
  </a>
</div> */}

  {/* <ul className="font-cormorant flex items-center gap-10 pr-6 text-amber-500">
    <li
      onMouseEnter={() => setHovered("home")}
      onMouseLeave={() => setHovered(null)}
      >
      <Link to="/" className="flex items-center justify-center">
        {hovered === "home" ? (
          <span className="text-md font-semibold">Home</span>
        ) : (
          <FaHome className="text-2xl text-cyan-400" />
        )}
      </Link>
    </li>

    <li
      onMouseEnter={() => setHovered("projects")}
      onMouseLeave={() => setHovered(null)}
      >
      <Link to="/projects" className="flex items-center justify-center">
        {hovered === "projects" ? (
          <span className="text-md font-semibold">Projects</span>
        ) : (
          <FaFolderOpen className="text-2xl text-cyan-400" />
        )}
      </Link>
    </li>

    <li
      onMouseEnter={() => setHovered("about")}
      onMouseLeave={() => setHovered(null)}
      >
      <Link to="/about-me" className="flex items-center justify-center">
        {hovered === "about" ? (
          <span className="text-md font-semibold">About Me</span>
        ) : (
          <FaUser className="text-2xl text-cyan-400" />
        )}
      </Link>
    </li>

    <li
      onMouseEnter={() => setHovered("contact")}
      onMouseLeave={() => setHovered(null)}
      className="mr-4" // Adds space from the right
      >
      <Link to="/contact" className="flex items-center justify-center">
        {hovered === "contact" ? (
          <span className="text-md font-semibold">Contact</span>
        ) : (
          <FaEnvelope className="text-2xl text-cyan-400" />
        )}
      </Link>
    </li>
  </ul>
</nav> */}

        </>
  );
};

export default Navbar;
