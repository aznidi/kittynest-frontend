import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Slider from './components/Slider';
import Features from './components/Features';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Features />
    </div>
  );
}

export default App;
