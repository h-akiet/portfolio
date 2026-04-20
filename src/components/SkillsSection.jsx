import React, { memo } from 'react';
import { Container } from 'react-bootstrap';
import './SkillsSection.css';

const SKILLS_DATA = [
  {
    id: 1,
    title: "Frontend Development",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS"],
    description: "Build responsive and interactive user interfaces with modern frontend frameworks.",
    icon: "💻"
  },
  {
    id: 2,
    title: "Backend Development",
    technologies: ["Node.js", "Express", "REST API", "Authentication", "Server architecture"],
    description: "Develop scalable backend services and APIs for web applications.",
    icon: "⚙️"
  },
  {
    id: 3,
    title: "Database Management",
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "Data modeling", "Query optimization"],
    description: "Design and manage structured and non-structured databases.",
    icon: "🗄️"
  },
  {
    id: 4,
    title: "Dev Tools",
    technologies: ["Git", "GitHub", "Docker", "CI/CD", "Linux"],
    description: "Use modern tools to streamline development workflow and deployment.",
    icon: "🛠️"
  },
  {
    id: 5,
    title: "Problem Solving",
    skills: ["Algorithms", "Data structures", "Debugging", "Code optimization"],
    description: "Apply analytical thinking to solve complex software problems.",
    icon: "🧩"
  },
  {
    id: 6,
    title: "Soft Skills",
    skills: ["Team collaboration", "Communication", "Time management", "Continuous learning"],
    description: "Work effectively in teams and adapt quickly to new technologies.",
    icon: "🤝"
  }
];

const SkillHexagon = memo(({ skill, position }) => {
  return (
    <div className={`skill-hexagon hexagon-${position}`}>
      <div className="hexagon-content">
        <div className="skill-icon">{skill.icon}</div>
        <h3 className="skill-title">{skill.title}</h3>
        <p className="skill-description">{skill.description}</p>
        <div className="skill-tech">
          {(skill.technologies || skill.skills).slice(0, 3).join(" • ")}
        </div>
      </div>
    </div>
  );
});

export const SkillsSection = memo(() => {
  return (
    <section className="skills-section" id="skills">
      <Container>
        <div className="skills-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Mastering frontend basics and engineering principles for clean, scalable code
          </p>
        </div>

        <div className="hexagon-grid">
          {SKILLS_DATA.map((skill, index) => (
            <SkillHexagon
              key={skill.id}
              skill={skill}
              position={index + 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
});