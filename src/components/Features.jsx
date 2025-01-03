import React from "react";
import { FaCat, FaHandHoldingHeart, FaSearch, FaUsers, FaDonate, FaMapMarkerAlt, FaClipboardList } from "react-icons/fa";

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
    {
      id: 4,
      icon: <FaUsers className="text-primary text-4xl" />,
      title: "Rejoindre la Communauté",
      description: "Devenez membre et participez activement à notre mission.",
      action: "S'inscrire",
    },
    {
      id: 5,
      icon: <FaDonate className="text-accent text-4xl" />,
      title: "Campagnes de Dons",
      description: "Contribuez à nos campagnes pour aider les chats les plus vulnérables.",
      action: "Participer",
    },
    {
      id: 6,
      icon: <FaMapMarkerAlt className="text-primary text-4xl" />,
      title: "Trouver un Refuge",
      description: "Trouvez des refuges et des centres d'adoption près de chez vous.",
      action: "Découvrir",
    }
  ];

  return (
    <div className="min-h-screen bg-light py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-12">
          Fonctionnalités de KittyNest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-neutral rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-2">
                {feature.title}
              </h3>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
