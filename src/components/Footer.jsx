import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-title">
              <Code2 size={20} className="footer-logo-icon" />
              <span>{personalInfo.name}</span>
            </div>
            <p className="footer-brand-desc">
              B.Tech IT Graduate • Software Developer | Java & Spring Boot
            </p>
          </div>

          <ul className="footer-nav">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer-nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-note">
            B.Tech IT Graduate • Software Developer | Java & Spring Boot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
