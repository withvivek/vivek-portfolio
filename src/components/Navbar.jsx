import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2, ArrowUpRight } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Identify active section
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar container" aria-label="Main Navigation">
        <a href="#hero" className="navbar-brand" onClick={(e) => handleNavClick(e, '#hero')}>
          <div className="brand-icon">
            <Code2 size={20} className="brand-svg" />
          </div>
          <span className="brand-name">{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navLinks.map((link) => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  {isActive && <span className="active-dot" />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume Button in Navbar (Opens Google Drive Resume in New Tab) */}
        <div className="nav-actions">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm nav-resume-btn"
            title="Open Resume in Google Drive"
            id="nav-resume-btn"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-inner container">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => {
              const sectionKey = link.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="mobile-active-pill">Active</span>}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-menu-footer">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm mobile-resume-btn"
              onClick={() => setIsOpen(false)}
              id="mobile-resume-btn"
            >
              <FileText size={16} />
              <span>Resume</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
