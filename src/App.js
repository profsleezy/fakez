import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Header from "./components/Header";
import About from "./components/AboutSection";
import Pricing from "./components/PricingSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Pricing />
    </div>
  );
}

export default App;
