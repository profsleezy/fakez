import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-item"><a href="#hero">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#pricing">Pricing</a></li>
          <li className="nav-item"><a href="#communities">Communities</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;