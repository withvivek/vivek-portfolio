import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certificationsData } from '../data/portfolioData';
import './Certifications.css';

const getIssuerBadgeClass = (issuer) => {
  if (issuer.includes('Coursera')) return 'issuer-coursera';
  if (issuer.includes('Infosys')) return 'issuer-infosys';
  return 'issuer-default';
};

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <SectionHeading
          tag="Credentials"
          title="Certifications"
          subtitle="Verified technical coursework and credentials from Coursera and Infosys SpringBoard."
        />

        <div className="certifications-grid">
          {certificationsData.map((cert, idx) => (
            <div key={idx} className="cert-card card-base">
              <div className="cert-top-row">
                <span className={`issuer-badge ${getIssuerBadgeClass(cert.issuer)}`}>
                  {cert.issuer}
                </span>
                <span className="cert-category-badge">{cert.category}</span>
              </div>

              <div className="cert-body">
                <div className="cert-icon-wrap">
                  <Award size={20} className="cert-award-icon" />
                </div>
                <h3 className="cert-title">{cert.title}</h3>
              </div>

              <div className="cert-footer">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm cert-verify-btn"
                    title={`View Certificate: ${cert.title}`}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="cert-verified">
                    <CheckCircle size={14} className="verified-icon" />
                    <span>Coursework Completed</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
