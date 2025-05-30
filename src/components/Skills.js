import React from 'react';
import '../styles/components/Skills.css';

const SkillCategory = ({ title, items }) => (
  <div className="skill-category">
    <div className="skill-header">
      <h3>{title}</h3>
    </div>
    <div className="skill-items">
      {items.map((item, index) => (
        <span key={index} className="skill-item">{item}</span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      items: [
        "JavaScript",
        "C",
        "C++",
        "Java",
        "Python",
        "Go",
        "CSS",
        "Shell Script",
        "HTML",
        "SQL"
      ]
    },
    {
      title: "Technologies & Tools",
      items: [
        "React",
        "Node.js",
        "AWS",
        "Databricks",
        "Linux CLI",
        "Git",
        "REST APIs",
        "Service Now",
        "Docker"
      ]
    },
    {
      title: "Data Structures",
      items: [
        "Bloom Filters",
        "Binary Search Trees (BSTs)",
        "Hash Tables",
        "Heaps",
        "Doubly-Linked Lists",
        "Arrays & Strings",
        "Graphs",
        "Stacks & Queues",
        "Bloom Filters"
      ]
    },
    {
      title: "Algorithms",
      items: [
        "Binary Search",
        "Depth/Breadth First Search",
        "Dijkstra's Algorithm",
        "Dynamic Programming",
        "Sorting Algorithms",
        "Tree Traversal",
        "Graph Algorithms",
        "Greedy Algorithms"
      ]
    },
    {
      title: "Professional Skills",
      items: [
        "Debugging & Troubleshooting",
        "Unit & Integration Testing",
        "Agile/Scrum",
        "Code Review",
        "Documentation",
        "Problem Solving",
        "Team Leadership",
        "Technical Writing"
      ]
    },
    {
      title: "Certifications/Achievements",
      items: [
        "Introduction to AWS Cloud Certification - May 2023",
        "Scrum Team Member Training Certification - May 2023",
        "Databricks Introduction to Data Engineering - June 2023",
        "Expert rating in NoRegret Skills for GitHub Collaboration",
        "Expert rating in NoRegret Skills for Python Data Essentials",
        "Expert rating in NoRegret Skills for AWS Architecting",
        "Dean's List 2021-2025",
        "Cumulative 3.72 GPA"
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 