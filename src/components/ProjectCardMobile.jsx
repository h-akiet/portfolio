import { Col, Row } from "react-bootstrap"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { memo } from 'react';

const ProjectCardMobile = memo(({
  title,
  description,
  tech = [],
  imgUrl,
  githubUrl
}) => {
  return (
    <Row className="mb-5 align-items-center">
      <Col size={12} className="px-0">
        <div className="proj-bx">
          <div className="proj-content">
            <div className="proj-title">
              <h4><strong>{title}</strong></h4>
            </div>
            <p>{description}</p>
            <div className="tech-stack">
              {tech && tech.map((item) => (
                <span key={item} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer" className="github-btn">
              <FontAwesomeIcon icon={faGithub} />
              <p>Github</p>
            </a>
          </div>
        </div>
      </Col>
    </Row>
  );
});

ProjectCardMobile.displayName = 'ProjectCardMobile';

export { ProjectCardMobile };