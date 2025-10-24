import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About ProAudit Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the auditing industry, ProAudit Solutions 
              has established itself as a trusted partner for businesses seeking comprehensive 
              financial auditing and compliance services.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified auditors combines deep industry knowledge with cutting-edge 
              technology to deliver accurate, timely, and actionable audit reports that help 
              businesses maintain compliance and improve their financial health.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <div className="main-image">
                <div className="image-placeholder">
                  <i className="fas fa-users"></i>
                  <span>Professional Team</span>
                </div>
              </div>
              <div className="floating-cards">
                <div className="floating-card">
                  <i className="fas fa-certificate"></i>
                  <span>Certified Auditors</span>
                </div>
                <div className="floating-card">
                  <i className="fas fa-award"></i>
                  <span>Industry Awards</span>
                </div>
                <div className="floating-card">
                  <i className="fas fa-shield-alt"></i>
                  <span>Compliance Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="team-section">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our Expert Team
          </h3>
          <div className="team-grid grid grid-3">
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <h4 className="member-name">John Smith</h4>
              <p className="member-position">Senior Audit Partner</p>
              <p className="member-experience">15+ years experience</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <h4 className="member-name">Sarah Johnson</h4>
              <p className="member-position">Compliance Specialist</p>
              <p className="member-experience">12+ years experience</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <h4 className="member-name">Michael Chen</h4>
              <p className="member-position">IT Audit Director</p>
              <p className="member-experience">10+ years experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
