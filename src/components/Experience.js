import React from 'react';
import '../styles/components/Experience.css';

const ExperienceCard = ({ role, company, location, period, achievements, logo }) => (
  <div className="experience-card">
    <div className="experience-header">
      <div className="company-logo">
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div className="header-content">
        <h3>{role}</h3>
        <h4>{company}</h4>
        <div className="meta-info">
          <span className="location">{location}</span>
          <span className="period">{period}</span>
        </div>
      </div>
    </div>
    <ul className="achievements-list">
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Software and Data Engineer",
      company: "John Deere",
      location: "Ames, Iowa",
      period: "May 2023 - Present",
      logo: "/images/deere-logo.png",
      achievements: [
        "Developed a network facing web application that monitors product health and alerts over 10,000 users of outages",
        "Designed the application using React and Node.js, leveraging AWS cloud for secure and scalable data storage",
        "Built 5+ micro-frontend components for Deere's largest data platform, enhancing usability and scalability",
        "Engineered 30+ Databricks tables to enhance data quality and transform raw data into usable formats",
        "Created dashboards that saved $4.9M in AWS costs by identifying and preventing overspend",
        "Implemented AWS cloud services to remotely deploy code, collect logs, house data, configure network",
        "Worked in a Scrum environment, contributing to sprint planning, stand-ups, and iterative development",
        "Reviewed production code to ensure quality, resolve issues, and maintain best practices"
      ]
    },
    {
      role: "Technical Assistant",
      company: "Iowa State Technical Solution Center",
      location: "Ames, Iowa",
      period: "January 2023 - May 2023",
      logo: "/images/isu-logo.png",
      achievements: [
        "Found efficient ways to solve hundreds of various IT problems at Iowa State",
        "Took over 1000 phone calls from customers and worked with databases to quickly scope and resolve issues",
        "Resolved hundreds of IT support tickets from online users with timely and effective responses",
        "Became proficient in various software such as Service Now, aware of key usage and common issues",
        "Fine-tuned troubleshooting and debugging skills to work effectively in a fast-paced environment",
        "Created documentation for IT support processes to improve troubleshooting and user assistance"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-content">
        <h2>Work Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 