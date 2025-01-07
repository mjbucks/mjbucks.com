import React from 'react';
// import '../styles/components/Education.css';

const EducationItem = ({ degree, institution, period, details }) => (
  <div className="education-item">
    <h3>{degree}</h3>
    <h4>{institution}</h4>
    <span className="period">{period}</span>
    {details && (
      <ul className="education-details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    )}
  </div>
);

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2015 - 2019",
      details: [
        "Graduated with Honors",
        "Specialized in Software Engineering",
        "Relevant coursework: Data Structures, Algorithms, Web Development"
      ]
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "2020",
      details: ["Professional level certification"]
    }
  ];

  return (
    <section className="education" id="education">
      <h2>Education & Certifications</h2>
      <div className="education-grid">
        {educationData.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Education; 