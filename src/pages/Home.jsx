// src/pages/Home.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import projects from '../data/projects.json';
import Projects from './Projects';
import { ProjectCard } from '../components/ProjectCard';

export default function Home() {
  return (
    <main>
      <section className="circular-links-section">
        <div className="circle-track">
          <div className="center-text">CORE EXPERTISE</div>
          
          {/* Image 1: Top */}
          <a 
            href="https://vercel.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="circle-img-link" 
            id="ai-icon" 
            style={{ left: '50%', top: 'calc(50% - 300px)' }}
          >
            <img src="/images/microchip.png" alt="Artificial Intelligence" />
            <div className="icon-text">Artificial Intelligence</div>
          </a>
          
          {/* Image 2: Bottom Right */}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="circle-img-link" 
            id="code-icon" 
            style={{ left: 'calc(50% + (300px * 0.866))', top: 'calc(50% + (300px * 0.5))' }}
          >
            <img src="/images/code.png" alt="Software Engineering" />
            <div className="icon-text">Software Engineering</div>
          </a>
          
          {/* Image 3: Bottom Left */}
          <a 
            href="https://developer.mozilla.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="circle-img-link" 
            id="lab-icon" 
            style={{ left: 'calc(50% - (300px * 0.866))', top: 'calc(50% + (300px * 0.5))' }}
          >
            <img src="/images/biotechnology.png" alt="Biomedical Sciences" />
            <div className="icon-text">Biomedical Sciences</div>
          </a>
        </div>
      </section>

      <Router>
        <h2 className="section-title">
          Project Selections
          <Link to="/Projects" style={{ fontSize: '10px' }}> [More projects]</Link>
        </h2>
        <Routes>
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>

      <section id="project-grid" className="grid">
        {projects && projects.length > 0 ? (
              projects.map((projectItem) => (
              <ProjectCard 
                  key={projectItem.id || projectItem.title} 
                  project={projectItem} 
              />
              ))
          ) : (
              <p style={{ color: 'red', gridColumn: '1/-1', textAlign: 'center' }}>
              No projects found. Check if your projects.json array is loading properly!
              </p>
          )}
      </section>
    </main>
  );
}