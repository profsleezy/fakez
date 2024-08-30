import React from 'react';
import './AboutSection.css'; 
import Divider from '@mui/joy/Divider';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>Fakez: Your Ultimate Fansign Creator</h2>
        <Divider className="divider"/>
        <p>
          Ever wanted to see your name or message on a fansign that looks just like the real thing? With Fakez, you can bring that dream to life. Fakez is a cutting-edge Discord bot designed to elevate your digital interactions by creating stunningly realistic fake fansigns with just a few clicks. Using state-of-the-art AI technology, Fakez generates custom fansigns that are so authentic, even your friends might do a double-take!
        </p>
        <div className="card-container">
          <div className="about-card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <h3>Personalized Experience</h3>
            <p>Fakez offers a variety of customization options, allowing you to create fansigns that perfectly match your vision. Whether it's your name, a funny quote, or a special message, Fakez brings your ideas to life.</p>
          </div>
          <div className="about-card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <h3>Artificial Intelligence</h3>
            <p>At the heart of Fakez is advanced AI technology that meticulously simulates the appearance and texture of real fansigns. Our AI algorithms analyze countless handwriting styles and materials to produce fansigns that look incredibly authentic.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
