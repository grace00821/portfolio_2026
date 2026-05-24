// import projects from './data/projects.json';
// // import { Projects } from './pages/projects';
// import { ProjectCard } from './components/ProjectCard';

// const renderPortfolio = () => {
//     const projectGrid = document.querySelector('#project-grid');

//     // Maps through your JSON and converts it into HTML components
//     projectGrid.innerHTML = projects
//         .map(project => ProjectCard(project))
//         .join('');
// };

// // Initialize the site
// document.addEventListener('DOMContentLoaded', renderPortfolio);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css'; 

ReactDOM.createRoot(document.getElementById('root')).render( // <--- Must be .render()
  <React.StrictMode>
    <App />
  </React.StrictMode>
);