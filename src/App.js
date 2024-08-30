import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Header from "./components/Header";
import About from "./components/AboutSection";
import Pricing from "./components/PricingSection";
import Community from "./components/CommunitySection"; 
import CTA from "./components/CTASection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Pricing />
      <Community />
      <CTA />
    </div>
  );
}

export default App;
