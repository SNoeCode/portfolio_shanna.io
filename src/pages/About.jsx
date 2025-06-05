
import React from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import shanna from "../assets/images/shanna1.jpg";

const About = () => {
  return (
    <>
   

        
      <section className="min-h-screen bg-gradient-to-br from-pink-900 via-sky-500 to-teal-900 px-4 py-8 flex flex-col items-center justify-center text-white">

        <div className="max-w-5xl w-full flex flex-col items-center gap-6 text-center">

          <div className="flex flex-col items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={shanna}
                alt="Shanna"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-2 text-xl font-bold text-cyan-100"  style={{ fontFamily: "Allura, cursive", fontSize: "40px" }}>Shanna Noe</h2>
            <p className="text-sm">Full-Stack Developer</p>
            <p className="text-sm text-cyan-200">Open to Opportunities</p>

            {/* Icons */}
            <div className="flex gap-4 mt-2 text-xl justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:snoe.prsvr@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* About Me */}
          <h1
            className="text-l font-bold mb-2"
            style={{ fontFamily: "inspiration, cursive", fontSize: "40px" }}
          >
            About Me
          </h1>
          <div className="text-sm leading-relaxed max-w-3xl">
            <p className="mb-3" style={{fontFamily: 'xanh-mono, cursive' }}>
              I am a certified Full-Stack MERN Developer through the Persevere
              Tech Alliance Program, currently expanding my expertise in ML/AI
              using Python at Columbia University's Justice Through Code
              program. As a <strong> Software Engineer Intern at Banyan Labs</strong>, I
              contribute to both front-end and back-end development, honing my
              skills in building scalable, responsive web applications. My
              proficiency in the MERN stack and Python allows me to create efficient
              solutions that address real-world challenges.
            </p>
            <a
              href="/shannaUpdatedResume11.pdf"
              download
              className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded text-white"
            ></a>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full text-sm text-left">
        
            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                Experience
              </h4>
              <ul className="space-y-1">
                <li>
                  <strong>Intern | Banyan Labs LLC</strong> (May 2025 – Present)
                  <ul className="list-disc ml-5">
                    <li>
                      Contributing to front-end and back-end feature
                      development.
                    </li>
                    <li>Using GitHub for project/task management.</li>
                    <li>Writing project documentation for consistency.</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                Education
              </h4>
              <ul className="space-y-1">
                <li>
                  <strong>Columbia University</strong> – Justice Through Code
                  (2025–Present)
                </li>
                <li>
                  <strong>Persevere Tech Alliance</strong> – Full-Stack
                  Development (2023–2025)
                </li>
                <li>
                  <strong>Pivot Technology School</strong> – Cybersecurity
                  Certificate (2023–2024)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
