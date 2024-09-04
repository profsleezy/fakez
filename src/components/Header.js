import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Header = () => {

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
    <header className='header'>
      <nav className="nav">
        <div className="logo-container">
          <img src="/logomini.png" alt="Logo" className="logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-item"><a href="#hero">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#pricing">Pricing</a></li>
          <li className="navitem2"><a href="#communities">Communities</a></li>
        </ul>
        <div id="telegram-login-container" className='login'>
        {/* Script will append the Telegram widget here */}
      </div>
      </nav>
    </header>
  );
};

export default Header;
