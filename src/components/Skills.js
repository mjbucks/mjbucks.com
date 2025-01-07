import React from 'react';
// import '../styles/components/Skills.css';

const SkillCategory = ({ category, skills }) => (
  <div className="skill-category">
    <h3>{category}</h3>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <span className="skill-name">{skill.name}</span>
          <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
    ],
    cloud: [
      { name: "AWS S3", level: 80 },
      { name: "AWS Lambda", level: 75 },
      { name: "Databricks", level: 85 },
    ],
    // Add more categories
  };

  return (
    <section className="skills">
      <h2>Skills & Technologies</h2>
      {Object.entries(skillsData).map(([category, skills]) => (
        <SkillCategory key={category} category={category} skills={skills} />
      ))}
    </section>
  );
};

export default Skills; 