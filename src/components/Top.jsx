// import React, { useContext } from 'react'
// import { ThemeContext } from '../context/ThemeContext'
// import { Link } from 'react-router-dom'
// import { Sun, Moon } from 'lucide-react'

// const Top = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext)

//   return (
//     <nav className="bg-[#2a2a2b] text-[#eaeaea] p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-semibold text-[#5294e2]">My Portfolio</h1>
//         <ul className="flex space-x-6 text-sm md:text-base">
//           <li><Link to="/" className="hover:text-[#5294e2]">Home</Link></li>
//           <li><Link to="/projects" className="hover:text-[#5294e2]">Projects</Link></li>
//           <li><Link to="/about" className="hover:text-[#5294e2]">About Me</Link></li>
//           <li><Link to="/contact" className="hover:text-[#5294e2]">Contact</Link></li>
//         </ul>
//         <button
//           onClick={toggleTheme}
//           className="ml-4 p-2 bg-[#444c56] hover:bg-[#3b434d] rounded transition"
//           aria-label="toggle theme"
//         >
//           {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
//         </button>
//       </div>
//     </nav>
//   )
// }

// export default Top
// import React, { useState, useContext } from 'react'
// import { ThemeContext } from '../context/ThemeContext'
// import { projects, skills, contact } from '../portifolio'
// import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   const [{ themeName, toggleTheme }] = useContext(ThemeContext)
//   const [showNavList, setShowNavList] = useState(false)

//   const toggleNavList = () => setShowNavList(!showNavList)

//   return (
//     <nav className={`flex justify-between items-center p-4 ${themeName === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
//       <h1 className="text-2xl font-semibold text-blue-500">Shanna's Portfolio</h1>

//       <ul className={`flex space-x-6 transition-transform md:flex-col md:fixed md:inset-0 md:w-full md:h-full md:z-20 md:bg-gray-800 md:justify-center md:items-center ${showNavList ? 'flex' : 'hidden md:hidden'}`}>
//         <li><Link to="/" onClick={toggleNavList} className="hover:text-blue-400">About</Link></li>
//         <li><Link to="/projects" onClick={toggleNavList} className="hover:text-blue-400">Projects</Link></li>
//         <li><Link to="/skills" onClick={toggleNavList} className="hover:text-blue-400">Skills</Link></li>
//         <li><Link to="/contact" onClick={toggleNavList} className="hover:text-blue-400">Contact</Link></li>
//       </ul>

//       {/* Fixed: Hamburger menu should ONLY open navigation */}
//       <button type="button" onClick={toggleNavList} className="text-xl ml-4 md:z-20" aria-label="toggle navigation">
//         {showNavList ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Fixed: Theme toggle should ONLY be handled by the Sun/Moon button */}
//       <button type="button" onClick={toggleTheme} className="text-xl ml-4" aria-label="toggle theme">
//         {themeName === 'dark' ? <FaSun /> : <FaMoon />}
//       </button>
//     </nav>
//   )
// }

// export default Navbar

// import React, {useState, useContext} from 'react'
// import { ThemeContext } from '../context/ThemeContext'

// import { Link } from 'react-router-dom'

// import { Sun, Moon } from 'lucide-react' // optional icons

// const Top = () => {
// //   const { theme, toggleTheme } = useContext(ThemeContext)
//     const { theme, toggleTheme } = useContext(ThemeContext)

//   return (
//     <>
//         <nav className="bg-[#2a2a2b] text-[#eaeaea] p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-semibold text-[#5294e2]">My Portfolio</h1>
//         <ul className="flex space-x-6 text-sm md:text-base">
//           <li><Link to="/" className="hover:text-[#5294e2]">Home</Link></li>
//           <li><Link to="/projects" className="hover:text-[#5294e2]">Projects</Link></li>
//           <li><Link to="/about" className="hover:text-[#5294e2]">About Me</Link></li>
//           <li><Link to="/contact" className="hover:text-[#5294e2]">Contact</Link></li>
//         </ul>
//         <button
//           onClick={toggleTheme}
//           className="ml-4 p-2 bg-[#444c56] hover:bg-[#3b434d] rounded transition"
//         >
//           {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
//         </button>
//       </div>
//     </nav>
//     </>
//     // <nav className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 flex justify-between items-center">
//     //   <h1 className="text-xl font-bold">My App</h1>
//     //   <button
//     //     onClick={toggleTheme}
//     //     className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//     //   >
//     //     {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
//     //   </button>
//     // </nav>
//   )
// }

// export default Top

  {/* <div className="min-h-screen bg-gradient-radial from-teal-500 to-orange-500 flexflex items-center justify-center"> */}
{/* <div style={{background: "spiral-gradient"}} className="min-h-screen  bg-gradient-radial from-teal-500 to-orange-500 flex items-center justify-center"> */}
  
    {/* <div className="min-h-screen flex items-center justify-center spiral-gradient">
 
  <div id="skills" ref={ref} className="min-h-screen flex flex-col items-center justify-center text-white p-8">
  <h1  style={{ fontFamily: "Oregano, cursive", fontSize: "36px"}} className="text-4xl font-bold mb-20 p-12 text-center gap-10 text-fast">My Skills</h1>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10"> 
    {skills.map((skill, index) => (
      <div
      key={skill}
      
      className={`text-md p-4 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0 scale-105" : "opacity-50 translate-y-10 scale-90"
        } ${index % 4 === 0 ? "text-blue-300" :
          index % 4 === 3 ? "text-pink-300" :
          index % 4 === 2 ? "text-yellow-200" :
          "text-purple-300"}`}
          style={{ transitionDelay: `${index * 75}ms`, fontFamily: "Oregano, cursive", fontSize: "26px" }}
          >
        {skill}
        
      </div>
    ))}
  </div> 



   </div>
  </div> */}
    </>
//  <div id="skills" className="min-h-screen flex flex-col items-center justify-center text-white p-8">
//       <h1 className="text-4xl font-bold mb-6">My Skills</h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {skills.map((skill, index) => (
//           <div key={index} className="flex flex-col items-center justify-center p-5 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition">
//             {skill.icon}  {/* Displays React Icons */} //             <p className="text-md mt-2">{skill.name}</p>
// 
//           </div>
//         ))} 
//       </div>
// </div>
//  <>
//       <nav className="fixed top-0 left-0 w-full h-[80px] flex items-center justify-between px-6 text-pink-400 bg-teal-900 border-b border-gray-700 bg-gray-900 shadow-xl bg-gradient-to-r from-gray-900 to-gray-700 z-50">
//         {/* <div className="flex items-center space-x-15">
//           <div className="flex items-center justify-between w-full px-6">
//             <h1
//               style={{ fontFamily: "Oregano, cursive", fontSize: "36px" }}
//               className="text-3xl font-bold bg-transparent px-4"
//             >
//               SN
//             </h1>
         
//   <a
//     href={about?.resume || "#"}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="font-girassol flex ju text-xl hover:text-zinc-300 text-indigo-900 bg-teal-800 border-2 border-indigo-600 px-4 py-2 rounded-md transition-all duration-300"
//   >
//     My Resume
//   </a>
// </div> */}
// <div className="flex items-center justify-between w-full gap-x-16 px-6">
//   {/* SN Heading */}
//   <h1
//     style={{ fontFamily: "Oregano, cursive", fontSize: "36px" }}
//     className="text-3xl font-bold bg-transparent px-4 mr-10"
//   >
//     SN
//   </h1>

//   {/* Resume Link */}
//   <a
//     href={about?.resume || "#"}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="font-girassol text-xl hover:text-zinc-300 text-indigo-900 bg-teal-800 border-2 border-indigo-600 px-4 py-2 rounded-md transition-all duration-300 ml-10"
//   >
//     My Resume
//   </a>
// </div>


//         {/* Nav Links and Theme Toggle */}

//         <ul className="font-cormorant flex space-x-10 gap-16 px-5 py-5 text-amber-500 mr-50">
//           <li
//             onMouseEnter={() => setHovered("home")}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <Link to="/" className="flex items-center justify-center">
//               {hovered === "home" ? (
//                 <span className="text-md font-semibold">Home</span>
//               ) : (
//                 <FaHome className="text-2xl text-cyan-400" />
//               )}
//             </Link>
//           </li>

//           <li
//             onMouseEnter={() => setHovered("projects")}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <Link to="/projects" className="flex items-center justify-center">
//               {hovered === "projects" ? (
//                 <span className="text-md font-semibold">Projects</span>
//               ) : (
//                 <FaFolderOpen className="text-2xl text-cyan-400" />
//               )}
//             </Link>
//           </li>

//           <li
//             onMouseEnter={() => setHovered("about")}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <Link to="/about-me" className="flex items-center justify-center">
//               {hovered === "about" ? (
//                 <span className="text-md font-semibold">About Me</span>
//               ) : (
//                 <FaUser className="text-2xl text-cyan-400" />
//               )}
//             </Link>
//           </li>

//           <li
//             onMouseEnter={() => setHovered("contact")}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <Link to="/contact" className="flex items-center justify-center">
//               {hovered === "contact" ? (
//                 <span className="text-md font-semibold">Contact</span>
//               ) : (
//                 <FaEnvelope className="text-2xl text-cyan-400" />
//               )}
//             </Link>
//           </li>
//         </ul>
//           {/* </div> */}
//       </nav>
//     </>