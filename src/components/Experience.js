import React from 'react';
// import '../styles/components/Experience.css';

const ExperienceItem = ({ role, company, period, achievements }) => (
  <div className="experience-item">
    <div className="experience-header">
      <h3>{role}</h3>
      <h4>{company}</h4>
      <span className="period">{period}</span>
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
      role: "Senior React Developer",
      company: "Company Name",
      period: "2020 - Present",
      achievements: [
        "Reduced AWS spend by $4.9M through optimized data pipelines",
        "Led a team of 5 developers in building a cloud-native application",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    // Add more experiences as needed
  ];

  return (
    <section className="experience" id="experience">
      <h2>Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience; 