
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App.jsx';
import { ProjectsProvider } from './context/ProjectsContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectsProvider>

     
      <App />


    </ProjectsProvider>
  </React.StrictMode>
);
