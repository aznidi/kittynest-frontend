import React from "react";
import { motion } from "framer-motion";

function CancelPayment() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-light flex flex-col items-center justify-center p-6"
    >
      <div className="bg-neutral w-full max-w-lg rounded-lg shadow-lg p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold text-accent mb-4">Paiement Annulé ❌</h1>
          <p className="text-gray-600 mb-6">
            Votre paiement a été annulé. Vous pouvez réessayer si vous le souhaitez.
          </p>
          <button
            onClick={() => (window.location.href = "/don")}
            className="px-6 py-3 bg-secondary text-light rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-primary"
          >
            Retourner à la page de don
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CancelPayment;
