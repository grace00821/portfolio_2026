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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;