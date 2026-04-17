import React, { useState, useCallback, memo } from 'react';
import { ChevronDown } from 'lucide-react';
import { useResponsive } from '../hooks';

const SkillGroup = memo(({ title, skills }) => {
  const isLargeScreen = useResponsive(768);
  const [isOpen, setIsOpen] = useState(isLargeScreen);

  const toggleOpen = useCallback(() => {
    if (!isLargeScreen) {
      setIsOpen(prev => !prev);
    }
  }, [isLargeScreen]);

  return (
    <div className={`item ${isOpen ? 'active' : ''}`}>
      <div className="item-normal" onClick={toggleOpen}>
        <div className="item-header">
          {title}
          <ChevronDown className={`arrow-icon ${isOpen ? 'rotated' : ''} desktop-hide`} />
        </div>

        {!isOpen && (
          <div className="item-content">
            <div className="mini-tags">
              {skills.map(s => (
                <span key={s.name}>{s.name}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={`skill-details ${isOpen ? 'show' : ''}`}>
        {skills.map((skill) => (
          <div className="progress-wrapper" key={skill.name}>
            <div className="progress-info">
              <span>{skill.name}</span>
              <span className="percent">{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: isOpen ? skill.level : '0%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export { SkillGroup };