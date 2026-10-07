import React, { useState } from 'react';
import { ArrowDown, FileText, User } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const isPlaceholderPhoto =
    !personalInfo.profileImage ||
    personalInfo.profileImage === 'PASTE_YOUR_PHOTO_URL_HERE' ||
    imageError;

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Introduction & CTAs */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="status-badge" role="status">
            <span className="status-pulse"></span>
            <span className="status-text">{personalInfo.status}</span>
          </div>

          {/* Name & Headline */}
          <h1 className="hero-title">{personalInfo.name}</h1>
          <p className="hero-headline">{personalInfo.headline}</p>

          {/* Short Introduction */}
          <p className="hero-intro">{personalInfo.shortIntro}</p>

          {/* Functional Hero Buttons */}
          <div className="hero-buttons">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="btn btn-primary"
              id="hero-view-projects-btn"
            >
              <span>View Projects</span>
              <ArrowDown size={16} />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              id="hero-download-resume-btn"
              title="Download or view resume on Google Drive"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="hero-github-btn"
              aria-label="GitHub Profile"
              title="Visit Vivek's GitHub Profile"
            >
              <GithubIcon size={17} />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="hero-linkedin-btn"
              aria-label="LinkedIn Profile"
              title="Visit Vivek's LinkedIn Profile"
            >
              <LinkedinIcon size={17} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Professional Circular Profile Photo */}
        <div className="hero-photo-wrapper">
          <div className="hero-avatar-frame">
            {!isPlaceholderPhoto ? (
              <img
                src={personalInfo.profileImage}
                alt="Vivek Yadav - Software Developer"
                className="hero-avatar-img"
                onError={() => setImageError(true)}
              />
            ) : (
              <div
                className="hero-avatar-placeholder"
                role="img"
                aria-label="Vivek Yadav - Software Developer"
              >
                <div className="avatar-monogram">VY</div>
                <span className="avatar-caption">Vivek Yadav</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
