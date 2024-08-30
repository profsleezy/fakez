import React from 'react';
import { motion } from 'framer-motion';
import './PricingSection.css';

// Define animation variants for different components
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const PricingSection = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-content">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Trigger animation on re-entry
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Premium Bundles
        </motion.h2>
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Trigger animation on re-entry
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Choose the bundle that suits you best. All our plans offer amazing features to enhance your experience.
        </motion.p>
        <div className="pricing-cards">
          <motion.div
            className="pricing-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Trigger animation on re-entry
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3>Basic Plan</h3>
            <p className="price">$5 bundle</p>
            <ul>
              <li>10 Fansign image generations</li>
            </ul>
            <button className="btn">Select Plan</button>
          </motion.div>
          <motion.div
            className="pricing-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Trigger animation on re-entry
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3>Standard Plan</h3>
            <p className="price">$10 bundle</p>
            <ul>
              <li>20 Fansign image generations</li>
            </ul>
            <button className="btn">Select Plan</button>
          </motion.div>
          <motion.div
            className="pricing-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Trigger animation on re-entry
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3>Premium Plan</h3>
            <p className="price">$20 bundle</p>
            <ul>
              <li>50 Fansign image generations</li>
            </ul>
            <button className="btn">Select Plan</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
