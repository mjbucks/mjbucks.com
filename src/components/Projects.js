import React from 'react';
import '../styles/components/Projects.css';

const ProjectCard = ({ title, description, image, technologies, demoLink, githubLink }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={image} alt={title} />
    </div>
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "mjbucks.com",
      description: "Built a modern personal portfolio website that showcases skills and experiences as a software engineer. Created the site with the React.js frontend framework, displaying modern styling techniques. Hosted the project in an S3 general purpose bucket, configured to statically host the content it holds. Distributed the content of the site to AWS Cloudfront for fast response times on a global scale. Registered the domain in AWS Route 53, routing all mjbucks.com traffic through CloudFront. Configured SSL certificates through AWS ACM for authentication, enabling client trust in the site.",
      image: "/images/project1.png",
      technologies: ["React", "CloudFront", "Route53", "S3", "ACM", "AWS"],
      githubLink: "https://github.com/mjbucks/mjbucks.com"
    },
    {
      title: "Lockheed Martin | HPC Monitoring Software",
      description: "Built a scalable telemetry system for HPC clusters, enabling real-time node monitoring with low resource usage. Engineered lightweight Go-based agents to scrape real-time system metrics from sensors and transmit via TCP. Developed a centralized SQLite database and API interface for real-time telemetry visualization using Go-Echarts.",
      image: "/images/project4.png",
      technologies: ["Go", "SQLite", "Go-Echarts", "TCP/IP", "Telemetry", "HPC", "Docker"],
    },
    {
      title: "Smackdown",
      description: "Smackdown is a web application game that allows users to play a turn based game with custom built characters. The game was constructed with UI components built in React, the game logic built in Node.js, user progress stored in MongoDB, and was given a A+ score on the final project presentation.",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/mjbucks/COMS-319-Final-Project/"
    },
    {
      title: "Ray Tracer",
      description: "Developed a ray tracer in C++ that generates photorealistic 3D images. Implemented features including multiple light sources, shadows, reflections, refractions, and anti-aliasing. Supports various 3D objects (spheres, quads, volumes, meshes) with different materials and textures. The image above demonstrates the ray tracer's capability to handle complex scenes with multiple objects and lighting effects.",
      image: "/images/project2.png",
      technologies: ["C++", "Ray-Tracing", "3D Graphics", "Linear Algebra"],
      githubLink: "https://github.com/mjbucks/COMS-336-imager/"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 