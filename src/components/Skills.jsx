import { Container, Row, Col } from "react-bootstrap";
import { useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { SkillGroup } from "./SkillGroup";

// Extract skills data outside component to avoid recreating on every render
const SKILLS_DATA = {
  languages: [
    { name: "C#", level: "90%" },
    { name: "C++", level: "90%" },
    { name: "JavaScript", level: "70%" },
    { name: "HTML/CSS", level: "80%" },
  ],
  databases: [
    { name: "SQL Server", level: "90%" },
  ],
  other: [
    { name: "Spring Boot", level: "80%" },
    { name: ".Net", level: "85%" },
    { name: "Git/Github", level: "90%" },
  ]
};

export const Skills = () => {
  // Memoize skills data to prevent unnecessary recreations
  const skills = useMemo(() => SKILLS_DATA, []);

  return (
    <section className="skill" id="skills">
      <Container>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="title">Skills</h2>
              <p>Mastering frontend basics and engineering principles for clean, scalable code</p>
              <div className="skills-grid-container">
                <SkillGroup title="Languages" skills={skills.languages} />
                <SkillGroup title="Databases" skills={skills.databases} />
                <SkillGroup title="Other" skills={skills.other} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};