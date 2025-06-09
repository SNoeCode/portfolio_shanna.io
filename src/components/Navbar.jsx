import React, { useContext, useState } from "react";
import Logo from "../assets/images/Dev.png";
import {
  FaHome,
  FaFolderOpen,
  FaUser,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { header, about } from "../data/portifolio";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="h-[80px]"></div>

      <nav className="fixed top-0 left-0 w-full h-[80px] flex items-center justify-between px-4 sm:px-6 lg:px-10 text-cyan-100 bg-gradient-to-r from-sky-500 to-teal-400 border-b border-gray-700 z-50 shadow-xl">
        
      
        <div className="flex items-center gap-4 sm:gap-6">
          <img
            src={Logo}
            alt="Shanna"
            className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-lg shadow-lg object-contain"
          />

          <a
            href={about?.resume || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-girassol flex shrink text-sm sm:text-lg text-pink-900 border-2 px-2 py-1 sm:px-4 sm:py-2 hover:bg-indigo-900 hover:text-white transition duration-300"
          >
            My Resume
          </a>
        </div>

       
        <ul className="font-cormorant hidden md:flex items-center gap-6 lg:gap-10 text-pink-700">
          <li
            onMouseEnter={() => setHovered("home")}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to="/" className="flex items-center justify-center">
              {hovered === "home" ? (
                <span className="text-md font-semibold">Home</span>
              ) : (
                <FaHome className="text-2xl text-cyan-100 hover:text-pink-300 transition duration-300" />
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
                <FaFolderOpen className="text-2xl text-cyan-100 hover:text-pink-300 transition duration-300" />
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
                <FaUser className="text-2xl text-cyan-100 hover:text-pink-300 transition duration-300" />
              )}
            </Link>
          </li>

          <li
            onMouseEnter={() => setHovered("contact")}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to="/contact" className="flex items-center justify-center">
              {hovered === "contact" ? (
                <span className="text-md font-semibold">Contact</span>
              ) : (
                <FaEnvelope className="text-2xl text-cyan-100 hover:text-pink-300 transition duration-300" />
              )}
            </Link>
          </li>
        </ul>

      
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyan-100 text-2xl focus:outline-none hover:text-pink-300 transition duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
        )}

      
        <div className={`md:hidden fixed top-[80px] right-0 h-auto w-64 bg-gradient-to-b from-sky-500 to-teal-400 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <ul className="font-cormorant flex flex-col items-start gap-8 p-8 text-cyan-100">
            <li className="w-full">
              <Link 
                to="/" 
                className="flex items-center gap-4 text-lg hover:text-pink-300 transition duration-300"
                onClick={closeMenu}
              >
                <FaHome className="text-xl" />
                <span>Home</span>
              </Link>
            </li>

            <li className="w-full">
              <Link 
                to="/projects" 
                className="flex items-center gap-4 text-lg hover:text-pink-300 transition duration-300"
                onClick={closeMenu}
              >
                <FaFolderOpen className="text-xl" />
                <span>Projects</span>
              </Link>
            </li>

            <li className="w-full">
              <Link 
                to="/about-me" 
                className="flex items-center gap-4 text-lg hover:text-pink-300 transition duration-300"
                onClick={closeMenu}
              >
                <FaUser className="text-xl" />
                <span>About Me</span>
              </Link>
            </li>

            <li className="w-full">
              <Link 
                to="/contact" 
                className="flex items-center gap-4 text-lg hover:text-pink-300 transition duration-300"
                onClick={closeMenu}
              >
                <FaEnvelope className="text-xl" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
