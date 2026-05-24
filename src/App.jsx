// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/projects';

// Placeholder components for your other paths so the app doesn't break when clicking links
const About = () => <div style={{ padding: '20px' }}><h2>About Page Content Goes Here</h2></div>;
const Projects = () => <div style={{ padding: '20px' }}><h2>Projects Page Content Goes Here</h2></div>;
const Research = () => <div style={{ padding: '20px' }}><h2>Research & Publications Content Goes Here</h2></div>;
const Contact = () => <div style={{ padding: '20px' }}><h2>Contact Content Goes Here</h2></div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="site-header">
          <h1 className="title">Grace Eunhye Yang</h1>
          <h3 className="subtitle">MPhil in Biomedical Sciences, specialized in Clinical AI</h3>
          <nav className="nav-bar">
            <div className="nav-links">
              {/* Changed from <a> to <Link to="..."> */}
              <Link to="/" className="nav-cta">Home</Link>
              <Link to="/about" className="nav-cta">About</Link>
              <Link to="/projects" className="nav-cta">Projects</Link>
              <Link to="/publications" className="nav-cta">Research</Link>
              <Link to="/contact" className="nav-cta">Contact</Link>
            </div>
          </nav>
        </header>

        {/* This defines which component loads based on the current browser URL path */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;