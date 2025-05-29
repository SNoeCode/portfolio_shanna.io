



import React from 'react';
import { BrowserRouter, Router,  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { ProjectsProvider } from './context/ProjectsContext';
import MatrixLoader from './components/MatrixLoader';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';

function App() {
  return (
   
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
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
<Footer/>
      </BrowserRouter>
    </ProjectsProvider>

  );
}

export default App;
     
