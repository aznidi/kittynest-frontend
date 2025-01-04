import React from "react";
import { FaAngleDown, FaInfoCircle, FaCat, FaDonate, FaUsers, FaVideo, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function FAQ() {
  const navigate = useNavigate();

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
      icon: <FaUsers className="text-secondary text-xl" />,
    },
    {
      question: "Où vont les dons ?",
      answer:
        "Tous les dons servent à fournir des soins vétérinaires, de la nourriture et un abri aux chats sans maison.",
      icon: <FaDonate className="text-primary text-xl" />,
    },
    {
      question: "Comment garantissez-vous que les dons sont utilisés pour les chats ?",
      answer:
        "Pour chaque don effectué, une vidéo de preuve sera envoyée sur votre WhatsApp, email et SMS, montrant l'aide apportée aux chats.",
      icon: <FaVideo className="text-accent text-xl" />,
    },
    {
      question: "Puis-je adopter un chat via KittyNest ?",
      answer:
        "Oui, vous pouvez. Parcourez notre section d'adoption pour trouver le compagnon parfait pour votre famille.",
      icon: <FaHeart className="text-secondary text-xl" />,
    },
    {
      question: "Comment puis-je contacter votre équipe ?",
      answer:
        "Vous pouvez nous contacter via notre page Contact. Cliquez sur le bouton ci-dessous pour en savoir plus.",
      icon: <FaEnvelope className="text-primary text-xl" />,
    },
  ];

  const dropdownVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
  };

  const handleNavigateToContact = () => {
    navigate("/contact");
  };

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
          Foire aux Questions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 max-w-3xl mx-auto"
        >
          Obtenez des réponses aux questions fréquemment posées sur KittyNest.
          Si vous avez d'autres questions, notre équipe est là pour vous aider.
        </motion.p>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-4xl space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  {faq.question.includes("contacter votre équipe") && (
                    <button
                      onClick={handleNavigateToContact}
                      className="mt-3 px-4 py-2 bg-secondary text-light rounded-md shadow hover:bg-accent transition"
                    >
                      Aller à Contact
                    </button>
                  )}
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
              Contactez notre équipe pour plus d'informations ou visitez notre section d'assistance. Nous sommes là
              pour vous guider.
            </p>
            <button
              onClick={handleNavigateToContact}
              className="px-6 py-3 bg-primary text-light rounded-full shadow-md hover:bg-secondary transition duration-300"
            >
              Contactez-nous
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FAQ;
