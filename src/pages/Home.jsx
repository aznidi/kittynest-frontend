import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Slider from "../components/Slider";
import Features from "../components/Features";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Slider Section */}
      <Slider />

      {/* Features Section */}
      <Features />
    </>
  );
}

export default Home;
