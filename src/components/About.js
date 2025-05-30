import React from 'react';
import '../styles/components/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              My name is Maxwell Rohrer, a Senior at Iowa State University majoring in Computer Science with a minor in Cybersecurity Engineering. I am passionate about building high-quality software and solving complex problems.
            </p>
            <p>
            As a software and data engineer, my goal is to continue to learn new skills and innovate the world every day. Some programming languages I am proficient in are Javascript, C, C++, SQL, Java, Python, C#, HTML, CSS, etc.
            </p>
            <p>As a software engineer, I have worked in a React frontend, NodeJS backend, AWS hosted full stack environment. I have developed backend APIs that send information from frontend users to AWS databases, developed frontend React components with a clean and intuitive look, and have configured AWS deployment features for seamless integration. </p>
            <p>As a data engineer, I have configured Databricks database tables with compute cluster runs to help innovate technology, optimize costs, and hone my skills as an engineer at Deere. </p>
            <p>I have research experience as an Undergraduate Research Assistant at Iowa State and leadership experience being an undergraduate leader as a part of the Iowa State Honors Program. I have critical thinking skills, and I am a natural leader who is willing to learn whatever it takes to grow and reach success.</p>
            <p>I am prepared to give everything I can to be productive, learn, and grow. Thank you!</p>
            <p className="fun-fact">
              <strong>Fun Fact:</strong> When I'm not coding, you can find me playing BASKETBALL (Let's hoop sometime)!
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">2+</span>
              <span className="highlight-label">Years of Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3.72</span>
              <span className="highlight-label">Final Cumulative GPA</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">10,000+</span>
              <span className="highlight-label">Users affected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 