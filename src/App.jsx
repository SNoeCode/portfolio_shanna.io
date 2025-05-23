



import React from 'react';
import { BrowserRouter, Router,  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
// import Top from './components/Top'
import { ProjectsProvider } from './context/ProjectsContext';
import MatrixLoader from './components/MatrixLoader';
import { ThemeProvider } from './context/ThemeContext';
// import Header from './components/Header'
function App() {
  return (
    <ThemeProvider>
    <ProjectsProvider>
      <MatrixLoader/>
      <BrowserRouter basename="/portfolio_shanna.io/">
        <Navbar/>
        <div className="min-h-screen bg-slate text-light transition-colors duration-300">
          {/* <Top/> */}
          {/* <Header/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ProjectsProvider>

</ThemeProvider>
  );
}

export default App;
      // <h1 className="text-3xl font-bold underline text-pink-500">Hello world!</h1>
      //  <h1 className="text-3xl font-bold underline text-pink"> 
   
