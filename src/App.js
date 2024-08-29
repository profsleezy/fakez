// src/App.js
import React from 'react';
import './App.css';
import Hero from './components/Hero';
import {NextUIProvider} from "@nextui-org/react";


function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;
