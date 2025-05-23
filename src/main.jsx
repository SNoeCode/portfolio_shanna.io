
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // TailwindCSS
import App from './App.jsx';
import { ProjectsProvider } from './context/ProjectsContext';

// import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectsProvider>

      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}

    </ProjectsProvider>
  </React.StrictMode>
);
