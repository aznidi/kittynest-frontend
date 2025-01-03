import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg"; // Assurez-vous que l'image existe dans ce chemin

function About() {
  return (
    <motion.div
      className="container mx-auto px-6 md:px-12 py-16 min-h-screen flex flex-col md:flex-row items-center justify-between"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
        <motion.img
          src={aboutImage}
          alt="About KittyNest"
          className="rounded-lg shadow-lg max-h-[400px] object-cover"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-between h-full space-y-6">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-accent"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Découvrez <span className="text-primary">KittyNest</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="font-bold text-primary">KittyNest</span> est une plateforme
          dédiée à l'aide aux <span className="font-bold text-secondary">chats des rues</span>.
          Nous croyons que chaque chat mérite une{" "}
          <span className="font-bold text-accent">seconde chance</span> dans un foyer
          aimant. Ensemble, nous pouvons leur offrir un{" "}
          <span className="font-bold text-primary">avenir meilleur</span>.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button className="group relative overflow-hidden px-6 py-3 bg-primary text-light text-lg rounded-full shadow-md transition duration-300 w-fit">
            <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative flex items-center space-x-2">
              <span>En Savoir Plus</span>
              <motion.span
                variants={{
                  hover: { x: 10 },
                }}
                className="inline-block text-xl"
              >
                →
              </motion.span>
            </span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
