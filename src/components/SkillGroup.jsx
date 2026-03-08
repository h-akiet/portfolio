import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const SkillGroup = ({ title, skills }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`item ${isOpen ? 'active' : ''}`}>
            {/* 1. Trạng thái bình thường (Header + Tags) */}
            <div className="item-normal" onClick={() => setIsOpen(!isOpen)}>
                <div className="item-header">
                    {title}
                    <ChevronDown className={`arrow-icon ${isOpen ? 'rotated' : ''}`} />
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