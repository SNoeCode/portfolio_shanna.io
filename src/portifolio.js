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

const projects = [
  {
    name: 'Shannas Store',
    description: 'Built dynamic store with functioning shopping cart, using CRUD, and authunications and authorization, and products list using a restful API.',
    stack: ['Mongo', 'React', 'Express','Node'],
    sourceCode: "https://github.com/SNoeCode/shannaStore",
    livePreview: 'https://your-live-preview.com', 
     image: "./images/project2.png"
   
  },
//   {
//     name: 'Portfolio Website',
//     description: 'Created a responsive portfolio site using React and TailwindCSS.',
//     stack: ['React', 'TailwindCSS', 'Vite'],
//     sourceCode: 'https://github.com/ShannaNoe/portfolio',
//     livePreview: 'https://your-portfolio-link.com',
//      image: "./images/project2.png" 
//   },
{
    name: "Horoscope App",
    description: "An interactive astrology app built with Vite and deployed on Vercel.",
    stack: ["React", "Vite", "CSS", "Python"],
    sourceCode: "https://github.com/SNoeCode/horoscope-app", 
    livePreview: "https://horoscope-63bbm0hd4-snoecodes-projects.vercel.app/",
     image: "./images/projectimg1.png" 

  },


]

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

export { header, about, projects, skills, contact }
