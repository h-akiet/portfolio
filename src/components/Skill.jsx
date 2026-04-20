import React, { memo } from 'react';

/**
 * Individual Skill Component
 * Displays a single skill item with title, description, and optional icon
 * Can be used in a hexagon-based layout or standard grid layout
 */
const Skill = memo(({ 
  title, 
  description, 
  icon, 
  technologies = [],
  className = ''
}) => {
  return (
    <div className={`skill-item ${className}`}>
      {icon && (
        <div className="skill-icon">
          {typeof icon === 'string' ? (
            <img src={icon} alt={title} />
          ) : (
            icon
          )}
        </div>
      )}
      
      <div className="skill-content">
        <h3 className="skill-title">{title}</h3>
        {description && (
          <p className="skill-description">{description}</p>
        )}
        
        {technologies.length > 0 && (
          <div className="skill-technologies">
            {technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';

export default Skill;
