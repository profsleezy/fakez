// src/components/Hero.js
import React from 'react';
import { Button } from '@nextui-org/react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">fakez.cc</h1>
      <p className="hero-description">
        Welcome to fakez.cc - Your reliable SaaS platform for XYZ services.
      </p>
      <div className="hero-buttons">
        <Button auto color="primary" size="lg" shadow>
          Get Started
        </Button>
        <Button auto color="secondary" size="lg" ghost>
          Community
        </Button>
      </div>
    </div>
  );
}

export default Hero;
