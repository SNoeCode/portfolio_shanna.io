
import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(localStorage.getItem('themeName') || 'light')

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    if (!localStorage.getItem('themeName')) {
      setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    }

    darkMediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('themeName')) {
        setThemeName(e.matches ? 'dark' : 'light')
      }
    })

    return () => darkMediaQuery.removeEventListener('change', () => {})
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
    document.documentElement.classList.toggle('dark', name === 'dark') // Enables Tailwind dark mode
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      <div className={`${themeName === 'dark' ? 'dark' : ''} min-h-screen bg-gray-100 dark:bg-gray-900`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }


// src/context/ThemeContext.jsx
// import React, { createContext, useContext, useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

// const ThemeContext = createContext()

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     // Get from localStorage first
//     return localStorage.getItem('theme') || 'light'
//   })

//   // Sync theme to <html> class
//   useEffect(() => {
//     const root = window.document.documentElement
//     if (theme === 'dark') {
//       root.classList.add('light')
//     } else {
//       root.classList.remove('dark')
//     }
//     console.log(`Current theme: ${theme}`)
//     localStorage.setItem('theme', theme)
//   }, [theme])

//   // Optional: Listen to system preference once on mount
//   useEffect(() => {
//     const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
//     const systemPrefersDark = darkMediaQuery.matches

//     if (!localStorage.getItem('theme')) {
//       setTheme(systemPrefersDark ? 'dark' : 'light')
//     }
//   }, [])

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export { ThemeProvider, ThemeContext }
// export const useTheme = () => useContext(ThemeContext)
// // src/contexts/ThemeContext.jsx
// import React, { createContext, useContext, useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
// const ThemeContext = createContext()

// const ThemeProvider = ({ children }) => {
//  const [theme, setTheme] = useState(() => {
//     // Get from localStorage first
//     return localStorage.getItem('theme') || 'light'
//   })
//  // Sync theme to <html> class
//   useEffect(() => {
//     const root = window.document.documentElement
//     if (theme === 'dark') {
//       root.classList.add('dark')
//     } else {
//       root.classList.remove('dark')
//     }
//     console.log(`Current theme: ${theme}`)
//     localStorage.setItem('theme', theme)
//   }, [theme])

//   // Optional: Listen to system preference once on mount
//   useEffect(() => {
//     const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
//     const systemPrefersDark = darkMediaQuery.matches

//     if (!localStorage.getItem('theme')) {
//       setTheme(systemPrefersDark ? 'dark' : 'light')
//     }
//   }, [])

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
//   }
// //   useEffect(() => {
// //     const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
// //     setTheme(darkMediaQuery.matches ? 'dark' : 'light')
// //     darkMediaQuery.addEventListener('change', (e) => {
// //       setTheme(e.matches ? 'dark' : 'light')
// //     });
// //   }, [])
// //  console.log(`Current theme: ${theme}`)
// //   const toggleTheme = () => {
// //     const name = theme === 'dark' ? 'light' : 'dark'
// //     localStorage.setItem('theme', name)
// //     setTheme(name)
// //   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }
// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// }
// export { ThemeProvider, ThemeContext }
// export const useTheme = () => useContext(ThemeContext)






//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

//   useEffect(() => {
//     const root = window.document.documentElement
//     if (theme === 'dark') {
//       root.classList.add('dark')
//     } else {
//       root.classList.remove('dark')
//     }
//     console.log(`Current theme: ${theme}`)
//     localStorage.setItem('theme', theme)
//   }, [theme])

// useEffect(() => {
//   const root = window.document.documentElement;
//   root.classList.toggle("dark", theme === "dark");
// }, [theme]);

// //   const toggleTheme = () => {
// //     setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
// //   }
// const toggleTheme = () => {
//   setTheme(prev => {
//     const newTheme = prev === "light" ? "dark" : "light";
//     console.log(`Switching to: ${newTheme}`);
//     return newTheme;
//   });
// };

// // src/contexts/ThemeContext.jsx
// import React, { createContext, useContext, useEffect, useState } from 'react'

// const ThemeContext = createContext()

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

//   useEffect(() => {
//     const root = window.document.documentElement
//     if (theme === 'dark') {
//       root.classList.add('dark')
//     } else {
//       root.classList.remove('dark')
//     }
//     console.log(`Current theme: ${theme}`)
//     localStorage.setItem('theme', theme)
//   }, [theme])

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export const useTheme = () => useContext(ThemeContext)
