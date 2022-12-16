import React from "react";

const ProjectCard = ({ project }) => {
  const projectStack = project.stack.map((tool) => {
    return (
      <img src={Object.values(tool)[0]} alt={Object.keys(tool)[0]} className="stack-skill" />
    );
  });
  return (
    <div className="project-card">
      <a data-aos="fade-right" href={project.url} dangerouslySetInnerHTML={{ __html: '' }} rel="noreferrer" alt={project.name} target="_blank" className="project-photo" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.3)), url(${project.img})`, backgroundSize: 'cover' }} />
      <div className="project-info" data-aos="fade-left">
        <h3>
          <a href={project.url} rel="noreferrer" target="_blank">
            {project.name}
          </a>
        </h3>
        <p className="subtitle">
          {project.description}
        </p>
        <p className="role">
          {project.role}
        </p>
        <div className="stack">
          {projectStack}
        </div>
        <a href={project.github} rel="noreferrer" target="_blank">
          <img src="../assets/../assets/images/icons/GitHub-Mark-32px.png" alt="GitHub code link" className="github-logo" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
