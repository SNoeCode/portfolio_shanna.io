import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(localStorage.getItem("themeName") || "light");

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (!localStorage.getItem("themeName")) {
      setThemeName(darkMediaQuery.matches ? "dark" : "light");
    }

    const handleChange = (e) => {
      if (!localStorage.getItem("themeName")) {
        setThemeName(e.matches ? "dark" : "light");
      }
    };

    darkMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", newTheme);
    setThemeName(newTheme);

    // Correctly apply or remove "dark" class from <html>
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };