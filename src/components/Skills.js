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
        "Python",
        "Java",
        "C",
        "C++",
        "C#",
        "SQL",
        "HTML/CSS",
        "Shell Script",
        "TypeScript"
      ]
    },
    {
      title: "Technologies & Frameworks",
      items: [
        "React",
        "Node.js",
        "AWS",
        "Databricks",
        "Linux",
        "Git",
        "REST APIs",
        "Service Now"
      ]
    },
    {
      title: "Data Structures",
      items: [
        "Arrays & Strings",
        "Linked Lists",
        "Hash Tables",
        "Binary Trees",
        "Heaps",
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
        "Scrum/Agile",
        "Unit Testing",
        "Integration Testing",
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
        "Introduction to AWS Cloud Certification",
        "Scrum Team Member",
        "Introduction to Databricks Data Engineering",
        "Dean's List 2021-2024",
        "3.78 GPA",
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