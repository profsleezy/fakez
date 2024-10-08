import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css'; 
import Divider from '@mui/joy/Divider';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // Trigger every time it enters the view
          transition={{ duration: 0.6 }}
        >
          Fakez: Your Ultimate Fansign Creator
        </motion.h2>
        <Divider className="divider"/>
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // Trigger every time it enters the view
          transition={{ duration: 0.6 }}
        >
          Ever wanted to see your name or message on a fansign that looks just like the real thing? With Fakez, you can bring that dream to life. Fakez is a cutting-edge Discord bot designed to elevate your digital interactions by creating stunningly realistic fake fansigns with just a few clicks. Using state-of-the-art AI technology, Fakez generates custom fansigns that are so authentic, even your friends might do a double-take!
        </motion.p>
        <motion.div
          className="card-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // Trigger every time it enters the view
        >
          <motion.div className="about-card" variants={cardVariants} transition={{ duration: 0.6 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ai ai-Pencil">
              <path d="M4.333 16.048L16.57 3.81a2.56 2.56 0 0 1 3.62 3.619L7.951 19.667a2 2 0 0 1-1.022.547L3 21l.786-3.93a2 2 0 0 1 .547-1.022z"/>
              <path d="M14.5 6.5l3 3"/>
            </svg>
            <h3>Personalized Experience</h3>
            <p>Fakez offers a variety of customization options, allowing you to create fansigns that perfectly match your vision. Whether it's your name, a funny quote, or a special message, Fakez brings your ideas to life.</p>
          </motion.div>
          <motion.div className="about-card" variants={cardVariants} transition={{ duration: 0.6 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ai ai-Computing">
              <rect x="5" y="5" width="14" height="14" rx="2"/>
              <path d="M8 5V2"/>
              <path d="M16 5V3l1-1"/>
              <path d="M16 22v-3"/>
              <path d="M9 22v-3"/>
              <path d="M5 8H2"/>
              <path d="M22 8h-3"/>
              <path d="M22 16h-3"/>
              <path d="M5 16H3l-1 1"/>
            </svg>
            <h3>Artificial Intelligence</h3>
            <p>At the heart of Fakez is advanced AI technology that meticulously simulates the appearance and texture of real fansigns. Our AI algorithms analyze countless handwriting styles and materials to produce fansigns that look incredibly authentic.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
