// import React, { useState, useContext } from 'react'
// import { ThemeContext } from '../context/ThemeContext'
// import { projects, skills, contact } from '../portifolio'
// import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

// const Navbar = () => {
//   const [{ themeName, toggleTheme }] = useContext(ThemeContext)
//   const [showNavList, setShowNavList] = useState(false)

//   const toggleNavList = () => setShowNavList(!showNavList)

//   return (
//     <nav className="flex justify-between items-center py-4">
//       <ul
//         className={`flex space-x-6 transition-transform md:flex-col md:fixed md:inset-0 md:w-full md:h-full md:z-20 md:bg-gray-800 md:justify-center md:items-center ${showNavList ? 'flex' : 'hidden md:hidden'}`}
//       >
//         {projects.length ? (
//           <li><a href="#projects" onClick={toggleNavList} className="text-white hover:text-blue-400">Projects</a></li>
//         ) : null}

//         {skills.length ? (
//           <li><a href="#skills" onClick={toggleNavList} className="text-white hover:text-blue-400">Skills</a></li>
//         ) : null}

//         {contact.email ? (
//           <li><a href="#contact" onClick={toggleNavList} className="text-white hover:text-blue-400">Contact</a></li>
//         ) : null}
//       </ul>

//       {/* Fix: Hamburger menu only toggles navigation, NOT theme */}
//       <button
//         type="button"
//         onClick={toggleNavList}
//         className="text-white text-xl ml-4 md:z-20"
//         aria-label="toggle navigation"
//       >
//         {showNavList ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Fix: Moon/Sun button controls theme instead */}
//       <button
//         type="button"
//         onClick={toggleTheme}
//         className="text-white text-xl ml-4"
//         aria-label="toggle theme"
//       >
//         {themeName === 'dark' ? <FaSun /> : <FaMoon />}
//       </button>
//     </nav>
//   )
// }

// export default Navbar
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  return (
   
         <nav className={`flex justify-between items-center p-4 ${themeName === 'dark' ? 'bg-mint text-white': 'bg-fuchsia-400 text-white'}`}>
      {/* Updated: Pink color for branding */}
      <h1 className="text-2xl font-semibold text-white">Shanna's Portfolio</h1>

 <ul className="flex space-x-8 ml-auto">
        <li><Link to="/" className="hover:text-pink-200">Home</Link></li>
        <li><Link to="/projects" className="hover:text-pink-200">Projects</Link></li>
        <li><Link to="/about-me" className="hover:text-pink-200">About Me</Link></li>
        <li><Link to="/contact" className="hover:text-pink-200">Contact</Link></li>
      </ul>


      {/* Fixed: Sun/Moon button toggles theme */}
      <button type="button" onClick={toggleTheme} className="text-xl text-pink-500 ml-4" aria-label="toggle theme">
        {themeName === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  )
}

export default Navbar
//    <nav className={`flex justify-between items-center p-4 ${themeName === 'dark' ? 'bg-fuchsia-800 text-white' : 'bg-fuchsia-400 text-black'}`}>
//       {/* Updated: Pink color for branding */}
//       <h1 className="text-2xl font-semibold text-pink-500">Shanna's Portfolio</h1>
