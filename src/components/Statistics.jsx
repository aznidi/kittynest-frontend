import React from "react";
import { motion } from "framer-motion";
import { FaCat, FaHandHoldingHeart, FaUsers, FaDonate } from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaCat className="text-primary text-4xl mb-4" />,
      number: 1250,
      label: "Chats sauvés",
    },
    {
      icon: <FaDonate className="text-secondary text-4xl mb-4" />,
      number: 85000,
      label: "Dons collectés (MAD)",
    },
    {
      icon: <FaHandHoldingHeart className="text-accent text-4xl mb-4" />,
      number: 320,
      label: "Bénévoles actifs",
    },
    {
      icon: <FaUsers className="text-primary text-4xl mb-4" />,
      number: 5000,
      label: "Membres engagés",
    },
  ];

  const countAnimation = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-light py-16 px-6"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-accent mb-4">Nos Statistiques</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Découvrez l’impact direct de votre soutien. Chaque don compte et
          contribue à sauver des vies et à bâtir une communauté plus solidaire.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={countAnimation}
            className="bg-neutral p-8 rounded-lg shadow-lg text-center"
          >
            <div className="flex justify-center">{stat.icon}</div>
            <motion.h3
              initial={{ count: 0 }}
              whileInView={{
                count: stat.number,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              className="text-3xl font-bold text-primary"
            >
              {Math.floor(stat.number).toLocaleString()}
            </motion.h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Statistics;
