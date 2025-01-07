import React from 'react';
// import '../styles/components/Projects.css';

const ProjectCard = ({ title, description, technologies, demoLink, githubLink, achievements }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="technologies">
      {technologies.map((tech, index) => (
        <span key={index} className="tech-tag">{tech}</span>
      ))}
    </div>
    <div className="achievements">
      {achievements.map((achievement, index) => (
        <p key={index}>{achievement}</p>
      ))}
    </div>
    <div className="project-links">
      {demoLink && <a href={demoLink}>Live Demo</a>}
      {githubLink && <a href={githubLink}>GitHub</a>}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "AWS Cost Optimization Dashboard",
      description: "Databricks dashboard for AWS spend analysis",
      technologies: ["Databricks", "AWS", "Python", "SQL"],
      achievements: ["Avoided $4.9M in AWS spend through optimization"],
      demoLink: "#",
      githubLink: "#"
    },
    // Add more projects here
  ];

  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 