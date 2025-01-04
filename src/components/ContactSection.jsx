import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ContactSection() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-light py-16 px-6"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold text-secondary">
          Besoin d'aide ou d'informations ?
        </h2>
        <p className="text-lg text-accent leading-relaxed">
          Nous sommes là pour vous aider ! Contactez-nous pour toute question ou
          assistance. Cliquez sur le bouton ci-dessous pour accéder à notre
          page de contact et nous envoyer un message directement.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className="mt-6 px-8 py-3 bg-primary text-light rounded-lg shadow-md font-semibold text-lg transition-transform hover:bg-secondary"
        >
          Contactez-nous
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ContactSection;
