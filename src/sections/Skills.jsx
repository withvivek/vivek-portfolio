import React from 'react';
import { Code2, Cpu, Server, Wrench } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Languages':
      return <Code2 size={22} className="cat-icon cat-languages" />;
    case 'Core / Programming':
      return <Cpu size={22} className="cat-icon cat-core" />;
    case 'Backend':
      return <Server size={22} className="cat-icon cat-backend" />;
    case 'Tools':
      return <Wrench size={22} className="cat-icon cat-tools" />;
    default:
      return <Code2 size={22} className="cat-icon" />;
  }
};

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          tag="Technical Stack"
          title="Skills & Technologies"
          subtitle="Core programming languages, CS fundamentals, backend technologies, and developer tools from my resume."
        />

        <div className="skills-grid">
          {skillsData.map((group) => (
            <div key={group.category} className="skill-card card-base">
              <div className="skill-card-top">
                <div className="skill-icon-bubble">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="skill-category-title">{group.category}</h3>
                  <p className="skill-category-desc">{group.description}</p>
                </div>
              </div>

              <div className="skill-pill-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    <span className="skill-dot" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
