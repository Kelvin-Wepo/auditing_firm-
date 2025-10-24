import React, { useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      icon: 'fas fa-calculator',
      title: 'Financial Auditing',
      description: 'Comprehensive financial statement audits ensuring accuracy and compliance with accounting standards.',
      features: ['Balance Sheet Analysis', 'Income Statement Review', 'Cash Flow Verification', 'Compliance Reporting']
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Compliance Auditing',
      description: 'Regulatory compliance audits to ensure your business meets all legal and industry requirements.',
      features: ['Regulatory Compliance', 'Risk Assessment', 'Policy Review', 'Documentation Audit']
    },
    {
      icon: 'fas fa-search',
      title: 'Internal Auditing',
      description: 'Internal control evaluation and operational efficiency assessment for improved business processes.',
      features: ['Process Evaluation', 'Control Testing', 'Efficiency Analysis', 'Recommendation Reports']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Performance Auditing',
      description: 'Performance evaluation and benchmarking to identify areas for improvement and growth.',
      features: ['KPI Analysis', 'Benchmarking', 'Performance Metrics', 'Improvement Plans']
    },
    {
      icon: 'fas fa-lock',
      title: 'IT Auditing',
      description: 'Information technology systems audit to ensure data security and system integrity.',
      features: ['Security Assessment', 'System Controls', 'Data Integrity', 'IT Governance']
    },
    {
      icon: 'fas fa-handshake',
      title: 'Due Diligence',
      description: 'Comprehensive due diligence services for mergers, acquisitions, and business transactions.',
      features: ['Financial Analysis', 'Risk Assessment', 'Legal Compliance', 'Transaction Support']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="services" className="services section bg-gray-50">
      <div className="container">
        <div className="services-header text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive auditing solutions tailored to meet your business needs 
            and ensure regulatory compliance.
          </p>
        </div>

        <div className="services-carousel">
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentService * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="carousel-slide">
                  <div className="service-card">
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          <i className="fas fa-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button 
              className="carousel-btn prev"
              onClick={() => setCurrentService((prev) => 
                prev === 0 ? services.length - 1 : prev - 1
              )}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="carousel-btn next"
              onClick={() => setCurrentService((prev) => 
                prev === services.length - 1 ? 0 : prev + 1
              )}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="carousel-indicators">
            {services.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentService ? 'active' : ''}`}
                onClick={() => setCurrentService(index)}
              />
            ))}
          </div>
        </div>

        <div className="services-grid grid grid-3 mt-12">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-item-icon">
                <i className={service.icon}></i>
              </div>
              <h4 className="service-item-title">{service.title}</h4>
              <p className="service-item-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

