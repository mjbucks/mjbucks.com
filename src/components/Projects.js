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
      description: "A modern, responsive portfolio website built from scratch showcasing my projects and skills. Deployed using AWS services: S3 for static hosting, CloudFront for content delivery, Route53 for DNS management, and ACM for SSL certification. Features smooth scrolling, responsive design, and interactive UI components built with React.",
      image: "/images/project1.png",
      technologies: ["React", "CloudFront", "Route53", "S3", "ACM", "Responsive Design"],
      githubLink: "https://github.com/mjbucks/mjbucks.com"
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
    },
    {
      title: "Pi-Hole Ad Blocker",
      description: "Configured and deployed a network-wide ad blocker using a Raspberry Pi 4 running Linux. Implemented DNS-level ad blocking that filters traffic before it reaches devices, resulting in faster browsing and reduced network load. Added over 1.5 million domain blocklist entries and had low query response times.",
      image: "/images/project3.png",
      technologies: ["Raspberry Pi", "Linux", "Pi-Hole"],
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