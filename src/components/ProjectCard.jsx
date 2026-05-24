// src/components/ProjectCard.jsx
import React from 'react';

export const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <span className="institution">{project.institution}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
        View Details
      </a>
    </div>
  );
};