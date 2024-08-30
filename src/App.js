import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Header from "./components/Header";
import About from "./components/AboutSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
