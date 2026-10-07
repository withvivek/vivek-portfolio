import React, { useState } from 'react';
import { Mail, Phone, FileText, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading
          tag="Get In Touch"
          title="Contact"
          subtitle="I am actively seeking entry-level Software Developer / Java Developer opportunities. Feel free to connect directly via email, phone, or LinkedIn."
        />

        <div className="contact-wrapper">
          <div className="contact-intro-card card-base">
            <h3 className="contact-name">{personalInfo.name}</h3>
            <p className="contact-role">Software Developer | Java | Spring Boot | REST APIs</p>
            <p className="contact-location">NIET Greater Noida • Open to relocation and remote opportunities</p>
          </div>

          <div className="contact-cards-grid">
            {/* Email Card */}
            <div className="contact-card card-base">
              <div className="contact-icon-box">
                <Mail size={22} className="contact-icon" />
              </div>
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-value"
                  title="Send email"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="contact-actions">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  title="Copy email address"
                  id="copy-email-btn"
                >
                  {copiedField === 'email' ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                  <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn-primary btn-sm"
                  id="mailto-btn"
                  title="Send email via mail client"
                >
                  <Send size={14} />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-card card-base">
              <div className="contact-icon-box">
                <Phone size={22} className="contact-icon" />
              </div>
              <div className="contact-info">
                <span className="contact-label">Phone</span>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="contact-value"
                  title="Call on mobile"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div className="contact-actions">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  title="Copy phone number"
                  id="copy-phone-btn"
                >
                  {copiedField === 'phone' ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                  <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="btn btn-primary btn-sm tel-action-btn"
                  id="call-phone-btn"
                  title="Call now"
                >
                  <Phone size={14} />
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="contact-card card-base">
              <div className="contact-icon-box">
                <GithubIcon size={22} className="contact-icon" />
              </div>
              <div className="contact-info">
                <span className="contact-label">GitHub</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                  title="Open GitHub profile in new tab"
                >
                  github.com/withvivek
                </a>
              </div>
              <div className="contact-actions">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  id="github-profile-btn"
                  title="Open GitHub profile"
                >
                  <ExternalLink size={14} />
                  <span>View Profile</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-card card-base">
              <div className="contact-icon-box">
                <LinkedinIcon size={22} className="contact-icon" />
              </div>
              <div className="contact-info">
                <span className="contact-label">LinkedIn</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                  title="Open LinkedIn profile in new tab"
                >
                  linkedin.com/in/vivekydv09
                </a>
              </div>
              <div className="contact-actions">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  id="linkedin-profile-btn"
                  title="Open LinkedIn profile"
                >
                  <ExternalLink size={14} />
                  <span>View Profile</span>
                </a>
              </div>
            </div>

            {/* Resume Card */}
            <div className="contact-card card-base contact-card-resume">
              <div className="contact-icon-box">
                <FileText size={22} className="contact-icon" />
              </div>
              <div className="contact-info">
                <span className="contact-label">Resume</span>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                  title="Open Resume in Google Drive"
                >
                  Google Drive Resume
                </a>
              </div>
              <div className="contact-actions">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  id="google-drive-resume-btn"
                  title="View Resume on Google Drive"
                >
                  <ExternalLink size={14} />
                  <span>Open Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
