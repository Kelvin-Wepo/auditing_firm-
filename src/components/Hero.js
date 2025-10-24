import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Professional Auditing Services
              <span className="hero-highlight"> You Can Trust</span>
            </h1>
            <p className="hero-description">
              Expert financial auditing and compliance services for businesses of all sizes. 
              We ensure accuracy, transparency, and regulatory compliance with our comprehensive 
              auditing solutions.
            </p>
            <div className="hero-buttons">
              <Link to="/book-appointment" className="btn btn-primary hero-btn">
                <i className="fas fa-calendar-alt"></i>
                Book Free Consultation
              </Link>
              <a href="#services" className="btn btn-secondary hero-btn">
                <i className="fas fa-info-circle"></i>
                Learn More
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients Served</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">99%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="hero-avatars">
              <div className="avatar-group">
                <div className="avatar avatar-1">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" />
                </div>
                <div className="avatar avatar-2">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" />
                </div>
                <div className="avatar avatar-3">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" />
                </div>
                <div className="avatar avatar-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" />
                </div>
                <div className="avatar avatar-5">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" />
                </div>
                <div className="avatar-more">
                  <span>+50</span>
                </div>
              </div>
              <p className="avatar-text">Trusted by 500+ satisfied clients</p>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <div className="card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Financial Analysis</h3>
              <p>Comprehensive financial health assessment</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Compliance Assurance</h3>
              <p>Regulatory compliance verification</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Risk Assessment</h3>
              <p>Detailed risk evaluation and mitigation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

