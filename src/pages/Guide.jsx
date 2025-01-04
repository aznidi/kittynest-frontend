import React from "react";
import { FaPaw, FaMapMarkerAlt, FaHeart, FaClipboardList, FaHandsHelping, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

function Guide() {
  const steps = [
    {
      title: "Étape 1 : Signaler un Chat",
      description: "Utilisez notre formulaire pour signaler un chat en détresse avec des détails précis.",
      icon: <FaMapMarkerAlt className="text-primary text-4xl" />,
    },
    {
      title: "Étape 2 : Faire un Don",
      description: "Aidez-nous à fournir des soins en faisant un don. Chaque contribution compte.",
      icon: <FaHeart className="text-accent text-4xl" />,
    },
    {
      title: "Étape 3 : Rejoindre la Communauté",
      description: "Participez à des événements, partagez vos expériences et sensibilisez les autres.",
      icon: <FaClipboardList className="text-secondary text-4xl" />,
    },
    {
      title: "Étape 4 : Adopter un Chat",
      description: "Offrez une maison aimante à un chat sans abri grâce à notre processus d'adoption facile.",
      icon: <FaHandsHelping className="text-primary text-4xl" />,
    },
    {
      title: "Étape 5 : Sensibilisation",
      description: "Apprenez à éduquer les autres sur l'importance des soins pour les animaux des rues.",
      icon: <FaLightbulb className="text-accent text-4xl" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-light flex flex-col items-center py-16 px-6 mt-5"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-accent mb-4"
        >
          Guide d'Utilisation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 max-w-3xl mx-auto"
        >
          Découvrez comment utiliser KittyNest pour signaler un chat, faire un don, adopter, et bien plus encore.
          Chaque étape contribue à améliorer la vie des chats des rues.
        </motion.p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-neutral p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4 hover:shadow-xl transition duration-300"
          >
            <div>{step.icon}</div>
            <h2 className="text-xl font-bold text-primary">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Additional Section: Pourquoi KittyNest */}
      <div className="w-full max-w-6xl mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary bg-opacity-10 p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8"
        >
          <img
            src="https://via.placeholder.com/400x300"
            alt="Guide illustration"
            className="w-full max-w-sm rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Pourquoi choisir KittyNest ?
            </h2>
            <p className="text-gray-600 mb-6">
              KittyNest est votre partenaire pour aider les chats des rues. Avec des outils simples et efficaces, vous pouvez faire une grande différence.
            </p>
            <button className="px-6 py-3 bg-primary text-light rounded-full shadow-md hover:bg-secondary transition duration-300">
              En savoir plus
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-accent"
        >
          Prêt à commencer ?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Naviguez vers l'étape suivante !")}
          className="mt-6 px-8 py-3 bg-secondary text-light rounded-full shadow-md hover:bg-primary transition duration-300"
        >
          Commencez maintenant
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Guide;
