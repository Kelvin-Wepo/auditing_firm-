import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CFO, TechCorp Solutions",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      text: "ProAudit Solutions transformed our financial processes. Their attention to detail and professional approach helped us identify cost-saving opportunities worth $2M annually. Highly recommended!"
    },
    {
      name: "Michael Chen",
      position: "CEO, Global Manufacturing Inc.",
      company: "Global Manufacturing Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      text: "The team's expertise in compliance auditing saved us from potential regulatory issues. Their thorough approach and clear communication made the entire process seamless."
    },
    {
      name: "Emily Rodriguez",
      position: "Finance Director, RetailMax",
      company: "RetailMax",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      text: "Outstanding service! They helped us streamline our internal controls and improve efficiency by 40%. The audit report was comprehensive and actionable."
    },
    {
      name: "David Thompson",
      position: "Managing Partner, Thompson & Associates",
      company: "Thompson & Associates",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      text: "Professional, reliable, and thorough. Their due diligence services were instrumental in our recent acquisition. The team's expertise is unmatched in the industry."
    },
    {
      name: "Lisa Wang",
      position: "Controller, HealthTech Innovations",
      company: "HealthTech Innovations",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      rating: 5,
      text: "Exceptional IT auditing services! They identified critical security vulnerabilities and helped us implement robust controls. Our data security has never been better."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="testimonials-header text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about our auditing services.
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="carousel-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p className="testimonial-text">"{testimonial.text}"</p>
                      <div className="testimonial-rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-position">{testimonial.position}</p>
                        <p className="author-company">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button 
              className="carousel-btn prev"
              onClick={() => setCurrentTestimonial((prev) => 
                prev === 0 ? testimonials.length - 1 : prev - 1
              )}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="carousel-btn next"
              onClick={() => setCurrentTestimonial((prev) => 
                prev === testimonials.length - 1 ? 0 : prev + 1
              )}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

