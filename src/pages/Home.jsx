import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Slider from "../components/Slider";
import Features from "../components/Features";
import ContactSection from "../components/ContactSection";

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

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

export default Home;
