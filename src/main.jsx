
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // TailwindCSS
import App from './App.jsx';
import { ProjectsProvider } from './context/ProjectsContext';
import { ThemeProvider } from './context/ThemeContext';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectsProvider>
      <ThemeProvider>
        {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      </ThemeProvider>
    </ProjectsProvider>
  </React.StrictMode>
);
