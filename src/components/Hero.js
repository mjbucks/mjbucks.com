import React from 'react';
// import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/path-to-your-photo.jpg" alt="Professional headshot" className="hero-image" />
        <h1>Your Name</h1>
        <h2>React Developer | AWS Cloud Enthusiast</h2>
        <div className="cta-buttons">
          <button className="cta-primary">View My Work</button>
          <button className="cta-secondary">Download Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 