import React from 'react';
import { GraduationCap, Server, Database, Code2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          tag="About Me"
          title="Background & Career Goal"
          subtitle="A dedicated 2026 B.Tech IT graduate focused on Java backend development and practical software engineering."
        />

        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="about-narrative card-base">
            <h3 className="about-narrative-title">Professional Overview</h3>
            <p className="about-text">{personalInfo.aboutMe}</p>

            <div className="about-key-points">
              <div className="about-point-item">
                <span className="point-dot"></span>
                <span><strong>Education:</strong> B.Tech in Information Technology (NIET Greater Noida, 2022–2026)</span>
              </div>
              <div className="about-point-item">
                <span className="point-dot"></span>
                <span><strong>Core Specialization:</strong> Java, Spring Boot, REST APIs & Relational Databases (SQL)</span>
              </div>
              <div className="about-point-item">
                <span className="point-dot"></span>
                <span><strong>Target Role:</strong> Entry-Level Software Developer / Java Developer</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="about-pillars">
            <div className="pillar-card card-base">
              <div className="pillar-icon-box">
                <GraduationCap size={22} />
              </div>
              <div className="pillar-content">
                <span className="pillar-label">Academic Profile</span>
                <h4 className="pillar-heading">B.Tech in IT (2022–2026)</h4>
                <p className="pillar-desc">Noida Institute of Engineering and Technology (NIET), CGPA: 7.8 / 10.</p>
              </div>
            </div>

            <div className="pillar-card card-base">
              <div className="pillar-icon-box">
                <Server size={22} />
              </div>
              <div className="pillar-content">
                <span className="pillar-label">Backend Engineering</span>
                <h4 className="pillar-heading">Java & Spring Boot</h4>
                <p className="pillar-desc">Developing RESTful APIs, Spring Data JPA, and secure application workflows.</p>
              </div>
            </div>

            <div className="pillar-card card-base">
              <div className="pillar-icon-box">
                <Database size={22} />
              </div>
              <div className="pillar-content">
                <span className="pillar-label">Data Management</span>
                <h4 className="pillar-heading">SQL & DBMS</h4>
                <p className="pillar-desc">Relational database schemas, CRUD operations, queries, and JDBC integration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
