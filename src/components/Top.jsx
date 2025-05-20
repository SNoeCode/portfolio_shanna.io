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