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
        
        {/* Card Container */}
        <div className="card-container">
          <div className="about-card">
            <h3>AI-Powered</h3>
            <p>Fakez uses advanced AI to create fansigns that look incredibly real. It's like having your own personal fan, anytime you want!</p>
          </div>
          <div className="about-card">
            <h3>Customizable</h3>
            <p>Create fansigns with custom messages, names, and designs. The possibilities are endless with Fakez.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
