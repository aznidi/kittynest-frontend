import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Slider from "../components/Slider";
import Features from "../components/Features";
import ContactSection from "../components/ContactSection";
import WhyUs from "../components/WhyUs";
import Statistics from "../components/Statistics";
import Community from "../components/Community";

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
      <Statistics />

      {/* Why Us ? Section */}
      <WhyUs />

      
      {/* Why Us ? Section */}
      <Community />


      {/* Contact Section */}
      <ContactSection />

      
    </>
  );
}

export default Home;
