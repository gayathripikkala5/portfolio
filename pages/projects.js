import React from "react";

function Projects() {
  return (
    <div className="container">

      <h1>My Projects</h1>

      <div className="project">
        <h3>Portfolio Website</h3>
        <p>Built using React and React Router</p>
        <a href="https://github.com/your-username/portfolio" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>

      <div className="project">
        <h3>Sports Blog</h3>
        <p>A content platform for sports articles</p>
        <a href="https://github.com/your-username/sports-blog" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>

    </div>
  );
}

export default Projects;