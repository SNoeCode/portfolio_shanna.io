const header = {
  homepage: 'https://github.com/SNoeCode',
  title: 'Web Developer',
}

const about = {
  name: 'Shanna Noe',
  role: 'Web Developer',
  description:"Full-stack developer specializing in MERN stack and Python for seamless solutions.",
  resume: 'https://drive.google.com/file/d/1GPiNblHFGkYLew-byZ5EHumqfRsNm16R/view?usp=sharing', // Replace with your actual resume link
  social: {
    linkedin: 'https://www.linkedin.com/in/shanna-noe/', // Replace with your actual LinkedIn profile
    github: 'https://github.com/SNoeCode',
  },
  
}
import project1 from '../assets/project1.png';

import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
// src/data/portifolio.js
export const projects = [
  {
    name: "Shannas Store",
    description: "Built dynamic store using MERN Stack, with functioning shopping cart, using CRUD, and authentications and authorization, and products list using a restful API.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    image: project2,
    livePreview: "", 
    sourceCode: "https://github.com/SNoeCode/ShannaStore"
  },
  {
    name: "Horoscope App",
    description: "An interactive astrology app built with Vite and deployed on Vercel.",
    techStack: ["React", "Vite", "Tailwind"],
    image: project1,
    livePreview: 'https://horoscope-d6jk8kvu9-snoecodes-projects.vercel.app/',
    sourceCode: 'https://github.com/SNoeCode/horoscope-app.git'
  },
  {
    name: "Todo App",
    description: "An interactive todo app built with Vite and deployed on Vercel.",
    techStack: ["React", "Tailwind"],
    image: project3,
    livePreview: "", // Not deployed yet
    sourceCode: "https://github.com/SNoeCode/todo-app"
  }
];


const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'TailwindCSS',
  'Vite',
  'Git',
  'PostCSS',
  'CI/CD',
  'Git Flow',
  'Responsive Design',
]

const contact = {
  email: 'snoe.prsvr@gmail.com', // Replace with your actual email
}

export { header, about, skills, contact }
