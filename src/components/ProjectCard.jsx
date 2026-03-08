import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  tech = [],
  imgUrl,
  githubUrl
}) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="tech-stack">
              {tech.map((item, index) => (
                <span key={index} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};