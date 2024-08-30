import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-item"><a href="#HeroSection">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#pricing">Pricing</a></li>
          <li className="nav-item"><a href="#communities">Communities</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
