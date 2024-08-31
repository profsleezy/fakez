import React, { useEffect } from 'react';
import { Chip } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate(); // Updated hook for navigation

  useEffect(() => {
    const telegramLogin = () => {
      // Check if the script is already added
      if (document.getElementById('telegram-widget-script')) return;

      // Create the script element
      const script = document.createElement('script');
      script.id = 'telegram-widget-script';
      script.src = 'https://telegram.org/js/telegram-widget.js?14';
      script.async = true;
      script.setAttribute('data-userpic', 'false');
      script.setAttribute('data-telegram-login', 'FakezTestBot');
      script.setAttribute('data-size', 'medium');
      script.setAttribute('data-auth-url', 'http://127.0.0.1/auth/telegram');
      script.setAttribute('data-request-access', 'write');

      // Append the script to the body
   // Append the script to the telegram-login-container div
   const container = document.getElementById('telegram-login-container');
   if (container) {
     container.appendChild(script);
   }

      // Style the widget after it loads
      script.onload = () => {
        const widget = document.querySelector('iframe.telegram-login-widget');
        if (widget) {
          widget.style.border = '2px solid #FFA500'; // Orange border
          widget.style.borderRadius = '10px'; // Rounded corners
          widget.style.boxShadow = '0 4px 12px rgba(255, 165, 0, 0.5)'; // Glow effect
          widget.style.marginTop = '1rem'; // Space above the widget
        }
      };

      // Clean up script when component unmounts
      return () => {
        const existingScript = document.getElementById('telegram-widget-script');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    };

    telegramLogin();
  }, []);

  // After successful authentication, handle the response from the server
  const handleTelegramResponse = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const hash = urlParams.get('hash');
    const id = urlParams.get('id');

    if (hash && id) {
      // Redirect to profile page
      navigate(`/profile/${id}`);
    } else {
      // Handle failure case
      console.log('Authentication failed. Please try again.');
    }
  };

  useEffect(() => {
    handleTelegramResponse();
  }, []);

  return (
    <header className="hero-section" id="hero">
      <Chip variant="outlined" className="hero-chip">
        Introducing Fakez
      </Chip>
      <h1>
        Looking for a fansign that's almost
        <br />
        <span className="gradient-text"> too real?</span>
      </h1>
      <p>
        Enhance your Discord experience with our innovative bot, Fakez, designed to create stunningly
        realistic fake fansigns. Leveraging cutting-edge AI technology, Fakez expertly crafts
        authentic-looking text and seamlessly integrates it onto high-quality images, elevating
        your digital interactions with a touch of creativity and flair.
      </p>
      {/* Telegram Login Button */}
      <div id="telegram-login-container">
        {/* Script will append the Telegram widget here */}
      </div>
      {/* SVG Stars */}
      <svg
        className="star star1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        x="0px"
        y="0px"
      >
        <path d="M51.82,63.87A15.94,15.94,0,0,1,64.54,51.51L72.81,50l-8.27-1.51A15.94,15.94,0,0,1,51.82,36.13L50,27.56l-1.82,8.57A15.94,15.94,0,0,1,35.46,48.49L27.19,50l8.27,1.51A15.94,15.94,0,0,1,48.18,63.87L50,72.44Z" />
      </svg>
      {/* ... other SVGs */}
    </header>
  );
};

export default HeroSection;
