
import React from 'react';
import { Button } from '@nextui-org/react';
import './Hero.css'; // Tailwind CSS file (if any)

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold mb-4 text-gray-800">fakez.cc</h1>
      <p className="text-xl text-gray-600 mb-8">
        Welcome to fakez.cc - Your reliable SaaS platform for XYZ services.
      </p>
      <div className="flex space-x-4">
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
