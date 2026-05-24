// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Projects from './pages/projects';
import Publications from './pages/publications';
import Contact from './pages/contact';

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
              <Link to="/about" className="nav-cta">About</Link>
              <Link to="/projects" className="nav-cta">Projects</Link>
              <Link to="/publications" className="nav-cta">Research</Link>
              <Link to="/contact" className="nav-cta">Contact</Link>
            </div>
          </nav>
        </header>

        {/* This defines which component loads based on the current browser URL path */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;