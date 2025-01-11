import React from 'react';
import '../styles/components/Education.css';

const EducationCard = ({ title, institution, details, certifications }) => (
  <div className="education-card">
    <div className="education-header">
      <div className="institution-logo">
        <img src="/images/isu-logo.png" alt="Institution logo" />
      </div>
      <div className="header-content">
        <h3>{title}</h3>
        <h4>{institution}</h4>
      </div>
    </div>
    <div className="education-details">
      {details.map((detail, index) => (
        <div key={index} className="detail-item">
          <span className="detail-bullet">•</span>
          <p>{detail}</p>
        </div>
      ))}
      {certifications && (
        <div className="certifications">
          <h4>Professional Education</h4>
          <div className="certification-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <span className="cert-icon">📜</span>
                <span className="cert-text">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

const Education = () => {
  const educationData = {
    title: "Bachelor's Degree",
    institution: "Iowa State University",
    details: [
      "Cumulative 3.78 GPA | ISU Dean's List fall of 2021/2022/2023, spring of 2022/2023/2024",
      "Major: Computer Science | Minor: Cybersecurity Engineering | Expected graduation date: May 2025",
      "Coursework: Data Structures, Large Dataset Algorithms, Cryptography, Computer Architecture, User Interfaces",
      "Undergraduate Research and lab experience at Iowa State University"
    ],
    certifications: [
      "Introduction to AWS Cloud Certification - May 2023",
      "Scrum Team Member Training Certification - May 2023",
      "Databricks Introduction to Data Engineering - June 2023",
      "Expert rating in NoRegret Skills for GitHub Collaboration",
      "Expert rating in NoRegret Skills for Python Data Essentials",
      "Expert rating in NoRegret Skills for AWS Architecting"
    ]
  };

  return (
    <section className="education" id="education">
      <div className="education-content">
        <h2>Education & Certifications</h2>
        <EducationCard {...educationData} />
      </div>
    </section>
  );
};

export default Education; 