import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Offrez un refuge chaleureux, sauvez des vies.";
  const typingSpeed = 100;
  const [index, setIndex] = useState(0);

  // Animation infinie du texte
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000);
    }
  }, [index]);

  return (
    <motion.div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 md:px-12 text-light">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col space-y-6 text-center md:text-left md:w-1/2"
        >
          {/* Animated Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-light">
            {displayedText}
            <span className="text-primary">|</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
            Rejoignez <span className="font-semibold text-primary">KittyNest</span> pour
            aider les chats des rues à trouver un foyer chaleureux.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            {/* Button 1 */}
            <motion.button
              whileHover="hover"
              className="group relative overflow-hidden px-6 py-3 bg-primary text-light text-lg rounded-full shadow-md transition duration-300"
            >
              <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative flex items-center space-x-2">
                <span>Signaler un Chat</span>
                <motion.span
                  variants={{
                    hover: { x: 10 },
                  }}
                  className="inline-block text-xl"
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            {/* Button 2 */}
            <motion.button
              whileHover="hover"
              className="group relative overflow-hidden px-6 py-3 bg-secondary text-light text-lg rounded-full shadow-md transition duration-300"
            >
              <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative flex items-center space-x-2">
                <span>Voir les Chats</span>
                <motion.span
                  variants={{
                    hover: { x: 10 },
                  }}
                  className="inline-block text-xl"
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
