import React from 'react';
import { Button, Chip } from '@mui/joy';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <header className="hero-section" id='hero'>
      <Chip
        variant="outlined"
        className="hero-chip"
      >
        Introducing Fakez
      </Chip>
      <h1>Looking for a fansign that's almost<br /><span className="gradient-text"> too real?</span></h1>
      <p>Enhance your Discord experience with our innovative bot, Fakez, designed to create stunningly realistic fake fansigns. Leveraging cutting-edge AI technology, Fakez expertly crafts authentic-looking text and seamlessly integrates it onto high-quality images, elevating your digital interactions with a touch of creativity and flair. - ChatGPT</p>
      <Button variant="solid" color="primary" className="neon-button">
        Sign Up
      </Button>
      {/* SVG Stars */}
      <svg className="star star1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" x="0px" y="0px">
        <path d="M51.82,63.87A15.94,15.94,0,0,1,64.54,51.51L72.81,50l-8.27-1.51A15.94,15.94,0,0,1,51.82,36.13L50,27.56l-1.82,8.57A15.94,15.94,0,0,1,35.46,48.49L27.19,50l8.27,1.51A15.94,15.94,0,0,1,48.18,63.87L50,72.44Z"/>
      </svg>
      <svg className="star star2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" x="0px" y="0px">
        <path d="M51.82,63.87A15.94,15.94,0,0,1,64.54,51.51L72.81,50l-8.27-1.51A15.94,15.94,0,0,1,51.82,36.13L50,27.56l-1.82,8.57A15.94,15.94,0,0,1,35.46,48.49L27.19,50l8.27,1.51A15.94,15.94,0,0,1,48.18,63.87L50,72.44Z"/>
      </svg>
      <svg className="star star3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" x="0px" y="0px">
        <path d="M51.82,63.87A15.94,15.94,0,0,1,64.54,51.51L72.81,50l-8.27-1.51A15.94,15.94,0,0,1,51.82,36.13L50,27.56l-1.82,8.57A15.94,15.94,0,0,1,35.46,48.49L27.19,50l8.27,1.51A15.94,15.94,0,0,1,48.18,63.87L50,72.44Z"/>
      </svg>
      <svg className="star star4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" x="0px" y="0px">
        <path d="M51.82,63.87A15.94,15.94,0,0,1,64.54,51.51L72.81,50l-8.27-1.51A15.94,15.94,0,0,1,51.82,36.13L50,27.56l-1.82,8.57A15.94,15.94,0,0,1,35.46,48.49L27.19,50l8.27,1.51A15.94,15.94,0,0,1,48.18,63.87L50,72.44Z"/>
      </svg>
      <svg className="star star7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" x="0px" y="0px">
        <path d="M51.82,63.87A15.94,15.94,0,0,1,64.54,51.51L72.81,50l-8.27-1.51A15.94,15.94,0,0,1,51.82,36.13L50,27.56l-1.82,8.57A15.94,15.94,0,0,1,35.46,48.49L27.19,50l8.27,1.51A15.94,15.94,0,0,1,48.18,63.87L50,72.44Z"/>
      </svg>
      <svg className="star star9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" x="0px" y="0px">
        <path d="M51.82,63.87A15.94,15.94,0,0,1,64.54,51.51L72.81,50l-8.27-1.51A15.94,15.94,0,0,1,51.82,36.13L50,27.56l-1.82,8.57A15.94,15.94,0,0,1,35.46,48.49L27.19,50l8.27,1.51A15.94,15.94,0,0,1,48.18,63.87L50,72.44Z"/>
      </svg>
    </header>
  );
};

export default HeroSection;
