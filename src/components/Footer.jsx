import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" text-cyan-100 bg-gradient-to-r from-sky-500 to-teal-400 py-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-lg font-semibold">Designed and Developed by Shanna Noe</h3>
        <h3 className="text-lg font-semibold mt-2">Copyright © {year} SN</h3>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/SNoeCode"
            className="text-white hover:text-gray-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/shannanoe/"
            className="text-white hover:text-gray-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;