import React from 'react';
import './CTASection.css'; // Import the CSS file

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-heading">Ready to Take the Next Step?</h2>
        <p className="cta-description">
          Join us today and be part of something amazing. Whether you're looking for more information or ready to dive in, we're here to help. Click below to get started!
        </p>
        <a href="#contact" className="cta-button">Get Started</a>
      </div>
    </section>
  );
};

export default CTASection;
