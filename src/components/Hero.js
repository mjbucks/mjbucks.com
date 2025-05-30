import React from 'react';
import '../styles/components/Hero.css';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('/documents/resume.pdf', '_blank');
  };

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-image-container">
          <img 
            src="/images/heroImage.png" 
            alt="Professional headshot" 
            className="hero-image" 
          />
        </div>
        <div className="hero-text">
          <h1>Maxwell Rohrer</h1>
          <h2>Software Engineer | Iowa State University Graduate | Computer Science & Cybersecurity</h2>
          <div className="cta-buttons">
            <button 
              className="cta-primary"
              onClick={handleViewWork}
            >
              View My Work
            </button>
            <button 
              className="cta-secondary"
              onClick={handleDownloadResume}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 