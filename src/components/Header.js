import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <Link to="/" className="brand-link">
              <i className="fas fa-calculator"></i>
              <span>ProAudit Solutions</span>
            </Link>
          </div>
          
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <a href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#testimonials" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            <Link to="/book-appointment" className="btn btn-primary nav-cta">
              Book Appointment
            </Link>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

