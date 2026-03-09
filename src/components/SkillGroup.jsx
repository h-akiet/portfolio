import React, { useState, useEffect} from 'react';
import { ChevronDown } from 'lucide-react';

export const SkillGroup = ({ title, skills }) => {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleOpen = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(!isOpen);
        }
    };

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
                            {skills.map(s => <span key={s.name}>{s.name}</span>)}
                        </div>
                    </div>
                )}

            </div>
            <div className={`skill-details ${isOpen ? 'show' : ''}`}>
                {skills.map((skill, index) => (
                    <div className="progress-wrapper" key={index}>
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
};