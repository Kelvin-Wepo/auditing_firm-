import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;

