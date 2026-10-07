import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, School } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <SectionHeading
          tag="Academics"
          title="Education"
          subtitle="Academic qualifications and performance from my resume."
        />

        <div className="education-timeline">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`education-card card-base ${edu.featured ? 'education-card-featured' : ''}`}
            >
              <div className="education-icon-col">
                <div className="edu-icon-bubble">
                  {edu.featured ? <GraduationCap size={26} /> : <School size={24} />}
                </div>
              </div>

              <div className="education-details">
                <div className="edu-meta-top">
                  <div className="edu-period">
                    <Calendar size={15} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="edu-score-pill">
                    <Award size={15} />
                    <span>{edu.score}</span>
                  </div>
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>

                <div className="edu-institution-row">
                  <MapPin size={16} className="edu-pin-icon" />
                  <p className="edu-institution">{edu.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
