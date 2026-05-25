// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="site-header">
          <h1 className="title">Grace Eunhye Yang</h1>
          <h3 className="subtitle">MPhil in Biomedical Sciences, specialized in Clinical AI</h3>
          <nav className="nav-bar">
            <div className="nav-links">
              <Link to="/" className="nav-cta">Home</Link>
              <Link to="/About" className="nav-cta">About</Link>
              <Link to="/Projects" className="nav-cta">Projects</Link>
              <Link to="/Publications" className="nav-cta">Publications</Link>
              <Link to="/Contact" className="nav-cta">Contact</Link>
            </div>
          </nav>
        </header>

        {/* This defines which component loads based on the current browser URL path */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Publications" element={<Publications />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Website Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/eunhye-grace/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://github.com/grace00821" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              {/* <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="footer-link">Google Scholar</a> */}
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;