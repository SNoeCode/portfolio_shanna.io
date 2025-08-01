const header = {
  homepage: 'https://github.com/SNoeCode',
  title: 'Web Developer',
}

const about = {
  name: 'Shanna Noe',
  role: 'Web Developer',
  description:"Full-stack developer specializing in MERN stack and Python for seamless solutions.",
  resume: 'https://docs.google.com/document/d/e/2PACX-1vT1vJYVDLHPKyVPNkgrpX_x74sfT26M63SyguQwhl-tclVTEtqGDOKxNr8pmCWfvWgcwYHrCWEkdKCh/pub',
  social: {
    linkedin: 'https://www.linkedin.com/in/shanna-noe/', // Replace with your actual LinkedIn profile
    github: 'https://github.com/SNoeCode',
  },
  
}
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

export const projects = [
  {
    name: "Shannas Store",
    description: "Built dynamic store using MERN Stack, with functioning shopping cart, using CRUD, and authentications and authorization, and products list using a restful API.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    image: project2,
    
    sourceCode: "https://github.com/SNoeCode/ShannaStore"
  },
  {
    name: "Horoscope App",
    description: "An interactive astrology app built with Vite and deployed on Vercel.",
    techStack: ["React", "Vite", "CSS"],
    image: project1,
    livePreview: 'https://shoroscope-app.netlify.app/',
    sourceCode: 'https://github.com/SNoeCode/horoscope-app.git'
  },
  {
    name: "Todo App",
    description: "An interactive todo app built with Vite and MERN stack.",
    techStack: ["React.js", "MongoDB", "CSS", "Express.js", "Node.js"],
    image: project3,
  
    sourceCode: "https://github.com/SNoeCode/todo-app"
  },
    {
    name: "Shoe Store Landing Page",
    description: "A responsive landing page for a shoe store, built with Next.js, TypeScript, and TailwindCSS.",
    techStack: ["Next.js", "TailwindCSS", "TypeScript"],
    image: project4,
    livePreview: "https://ojt-project-eight.vercel.app/",
    sourceCode: "https://github.com/seatherly-banyanlabs/team2-project.git"
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
  email: 'snoe.prsvr@gmail.com', 
}
export { header, about, skills, contact }
