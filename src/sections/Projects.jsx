import React from 'react';
import { Check } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import SectionHeading from '../components/SectionHeading';
import { projectsData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          tag="Featured Work"
          title="Projects"
          subtitle="Full-stack and backend software applications built with Java, Spring Boot, REST APIs, and database integration."
        />

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={project.id} className="project-card card-base">
              {/* Project Header */}
              <div className="project-card-header">
                <div className="project-badge-row">
                  <span className="project-index">Project 0{index + 1}</span>
                  <span className="project-tagline-chip">{project.tagline}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>

              {/* Tech Stack Pills */}
              <div className="project-tech-section">
                <h4 className="project-subtitle">Tech Stack</h4>
                <div className="project-tech-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Description Points / Features */}
              <div className="project-features-section">
                <h4 className="project-subtitle">Overview & Highlights</h4>
                <ul className="project-features-list">
                  {project.descriptionPoints.map((point, pIdx) => (
                    <li key={pIdx} className="feature-item">
                      <span className="feature-check">
                        <Check size={14} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: View on GitHub button only */}
              <div className="project-card-footer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary project-github-btn"
                  id={`project-github-btn-${project.id}`}
                  title={`View ${project.title} on GitHub`}
                >
                  <GithubIcon size={18} />
                  <span>View on GitHub</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
