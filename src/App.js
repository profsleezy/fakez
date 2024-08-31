import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/AboutSection';
import Pricing from './components/PricingSection';
import Community from './components/CommunitySection';
import CTA from './components/CTASection';
import Profile from './components/Profile.js'; // Import your Profile component
import AuthTelegram from './components/AuthTelegram.js'; // Import your AuthTelegram component

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HeroSection />
              <About />
              <Pricing />
              <Community />
              <CTA />
            </>
          } />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/auth/telegram" element={<AuthTelegram />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
