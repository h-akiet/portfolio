import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { memo } from "react";

const ProjectCardTest = memo(({
  title,
  description,
  tech = [],
  imgUrl,
  githubUrl
}) => {
  return (
    <div className="proj-container">
        <Row md={3} className="proj-bx align-items-stretch d-flex">
          {/* Image Column */}
          <Col className="proj-img-col">
            <div className="img-holder">
              <img src={imgUrl} alt={title} />
            </div>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-card-btn">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub (Source Code)</span>
            </a>
          </Col>

          {/* Content Column */}
          <Col md={9} className="proj-txt-col d-flex">
            <div className="proj-text">
              <h4>{title}</h4>
              <p>{description}</p>

              <div className="tech-section">
                <div className="tech-grid">
                  {tech.map((item) => (
                    <div key={item} className="tech-item-box">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
  );
});

ProjectCardTest.displayName = 'ProjectCardTest';

export { ProjectCardTest };