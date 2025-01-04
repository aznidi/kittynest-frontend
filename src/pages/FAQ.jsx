import React from "react";
import { FaAngleDown, FaInfoCircle, FaCat, FaDonate } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function FAQ() {
  const faqs = [
    {
      question: "Comment puis-je faire un don ?",
      answer:
        "Cliquez sur le bouton 'Faire un Don' dans la barre de navigation et suivez les étapes. Vos dons aident à sauver des vies.",
      icon: <FaDonate className="text-primary text-xl" />,
    },
    {
      question: "Comment signaler un chat en détresse ?",
      answer:
        "Rendez-vous dans la section 'Signaler un Chat', remplissez le formulaire et ajoutez des détails pour nous aider à localiser le chat.",
      icon: <FaCat className="text-accent text-xl" />,
    },
    {
      question: "Comment puis-je rejoindre la communauté ?",
      answer:
        "Créez un compte sur KittyNest, participez aux discussions, et rejoignez nos événements pour soutenir notre cause.",
      icon: <FaInfoCircle className="text-secondary text-xl" />,
    },
    {
      question: "Où vont les dons ?",
      answer:
        "Tous les dons servent à fournir des soins vétérinaires, de la nourriture et un abri aux chats sans maison.",
      icon: <FaDonate className="text-primary text-xl" />,
    },
  ];

  const dropdownVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-light flex flex-col items-center py-16 px-6 mt-5">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent mb-4">
          Foire aux Questions
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Obtenez des réponses aux questions fréquemment posées sur KittyNest.
          Si vous avez besoin d'aide supplémentaire, contactez-nous.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-4xl space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="bg-neutral p-6 rounded-lg shadow-lg"
          >
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-primary cursor-pointer hover:text-accent">
                <div className="flex items-center space-x-3">
                  {faq.icon}
                  <span>{faq.question}</span>
                </div>
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaAngleDown className="text-secondary text-lg group-open:rotate-180 transition-transform duration-300" />
                </motion.div>
              </summary>
              <AnimatePresence>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="mt-4 text-gray-600 overflow-hidden"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </AnimatePresence>
            </details>
          </motion.div>
        ))}
      </div>

      {/* Placeholder Section */}
      <div className="w-full max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary bg-opacity-10 p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8"
        >
          <img
            src="https://via.placeholder.com/400x300"
            alt="FAQ illustration"
            className="w-full max-w-sm rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Toujours des questions ?
            </h2>
            <p className="text-gray-600 mb-6">
              Contactez notre équipe pour plus d'informations. Nous sommes là
              pour vous aider à faire une différence dans la vie des chats.
            </p>
            <button className="px-6 py-3 bg-primary text-light rounded-full shadow-md hover:bg-secondary transition duration-300">
              Contactez-nous
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;
