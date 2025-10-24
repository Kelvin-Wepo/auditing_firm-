import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BookAppointment.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment booking:', formData);
    setIsSubmitted(true);
  };

  const services = [
    'Financial Auditing',
    'Compliance Auditing',
    'Internal Auditing',
    'Performance Auditing',
    'IT Auditing',
    'Due Diligence'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  if (isSubmitted) {
    return (
      <div className="appointment-page">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Appointment Request Submitted!</h2>
            <p>Thank you for your interest in our auditing services. We'll contact you within 24 hours to confirm your appointment.</p>
            <Link to="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-page">
      <div className="appointment-header">
        <div className="container">
          <div className="header-content">
            <h1>Book Your Consultation</h1>
            <p>Schedule a free consultation with our auditing experts</p>
          </div>
        </div>
      </div>

      <div className="appointment-content">
        <div className="container">
          <div className="appointment-grid">
            <div className="appointment-form-section">
              <div className="form-card">
                <h2>Schedule Your Appointment</h2>
                <form onSubmit={handleSubmit} className="appointment-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Preferred Date *</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="time">Preferred Time *</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your auditing needs..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    <i className="fas fa-calendar-check"></i>
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>

            <div className="appointment-info-section">
              <div className="info-card">
                <h3>Why Choose Our Auditing Services?</h3>
                <ul className="benefits-list">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>15+ years of industry experience</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Certified and licensed auditors</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Comprehensive compliance reporting</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Confidential and secure process</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Detailed audit reports</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Ongoing support and consultation</span>
                  </li>
                </ul>
              </div>

              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>info@proauditsolutions.com</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
