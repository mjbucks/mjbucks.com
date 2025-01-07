import React from 'react';
// import '../styles/components/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate React Developer and AWS Cloud Enthusiast with extensive experience
              in building scalable web applications and optimizing cloud infrastructure.
            </p>
            <p>
              With a strong background in React, Databricks, and AWS, I've helped organizations
              optimize their cloud spending and build efficient data pipelines. One of my notable
              achievements includes implementing a cost optimization strategy that avoided $4.9M
              in AWS spend.
            </p>
            <p className="fun-fact">
              <strong>Fun Fact:</strong> When I'm not coding, you can find me [Your Interesting Hobby/Activity]
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            {/* Add more stats as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 