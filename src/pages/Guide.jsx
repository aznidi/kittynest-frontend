import React from "react";
import { FaPaw, FaMapMarkerAlt, FaHeart, FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";

function Guide() {
  const steps = [
    {
      title: "Étape 1 : Signaler un Chat",
      description:
        "Si vous voyez un chat en détresse, utilisez notre formulaire pour signaler l'emplacement exact et ajouter des détails.",
      icon: <FaMapMarkerAlt className="text-primary text-4xl" />,
    },
    {
      title: "Étape 2 : Faire un Don",
      description:
        "Contribuez pour aider les chats à obtenir les soins nécessaires. Chaque don compte et fait une différence.",
      icon: <FaHeart className="text-accent text-4xl" />,
    },
    {
      title: "Étape 3 : Rejoindre la Communauté",
      description:
        "Participez aux événements, partagez vos expériences et aidez à sensibiliser les autres à notre cause.",
      icon: <FaClipboardList className="text-secondary text-4xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-light flex flex-col items-center py-16 px-6 mt-5">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent mb-4">Guide d'Utilisation</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Apprenez comment utiliser KittyNest pour signaler un chat, faire un don, et rejoindre notre communauté.
          Chaque action compte pour offrir une vie meilleure aux chats sans abri.
        </p>
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

      {/* Placeholder Section */}
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
              Pourquoi utiliser KittyNest ?
            </h2>
            <p className="text-gray-600 mb-6">
              KittyNest est conçu pour rendre chaque action facile et impactante. Découvrez comment notre plateforme
              peut vous aider à changer la vie des chats des rues.
            </p>
            <button className="px-6 py-3 bg-primary text-light rounded-full shadow-md hover:bg-secondary transition duration-300">
              En savoir plus
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Guide;
