import React from "react";
import { FaCat, FaHandHoldingHeart, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      id: 1,
      icon: <FaSearch className="text-primary text-4xl" />,
      title: "Signaler un Chat",
      description: "Aidez-nous à localiser les chats en détresse près de chez vous.",
    },
    {
      id: 2,
      icon: <FaHandHoldingHeart className="text-accent text-4xl" />,
      title: "Faire un Don",
      description: "Contribuez à offrir des soins et une seconde chance aux chats des rues.",
      action: "Faire un Don",
    },
    {
      id: 3,
      icon: <FaCat className="text-secondary text-4xl" />,
      title: "Chats Disponibles",
      description: "Parcourez notre liste de chats prêts à trouver un foyer aimant.",
      action: "Explorer",
    },
  ];

  // Animation pour la section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-accent text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          Fonctionnalités de KittyNest
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-neutral rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
              variants={cardVariants}
              custom={index}
            >
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
              {/* Action Button */}
              {feature.action && (
                <button className="group relative overflow-hidden px-6 py-3 bg-primary text-light text-sm rounded-full shadow-md transition duration-300 mt-4">
                  <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative flex items-center space-x-2">
                    <span>{feature.action}</span>
                    <span className="inline-block text-xl group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Features;
