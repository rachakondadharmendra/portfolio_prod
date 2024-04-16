import React from 'react';

function ProjectCard({ title, summary, techStack, githubUrl, demoUrl }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div className="summary">
   
      </div>
      <div className="expanded-summary">
        {summary}
      </div>
      <div className="project-details">
        <p><strong>Tech Stack:</strong> {techStack}</p> {/* Wrapped techStack in <strong> tag */}
        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          {demoUrl && ( // Checking if demoUrl is not empty
            <a href={demoUrl} target="_blank" rel="noreferrer">Website</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
