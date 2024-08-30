import React from 'react';
import './PricingSection.css'; // Import the CSS file

const PricingSection = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-content">
        <h2>Premium Bundles</h2>
        <p>Choose the bundle that suits you best. All our plans offer amazing features to enhance your experience.</p>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic Plan</h3>
            <p className="price">$5 bundle</p>
            <ul>
              <li>10 Fansign image generations</li>
            </ul>
            <button className="btn">Select Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Standard Plan</h3>
            <p className="price">$10 bundle</p>
            <ul>
            <li>20 Fansign image generations</li>
            </ul>
            <button className="btn">Select Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Premium Plan</h3>
            <p className="price">$20 bundle</p>
            <ul>
            <li>50 Fansign image generations</li>
            </ul>
            <button className="btn">Select Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
