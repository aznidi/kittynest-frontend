import React from "react";
import { motion } from "framer-motion";

function Community() {
  const members = [
    {
      name: "Nana Janashia",
      role: "Consultante DevOps",
      company: "TechWorld with Nana",
      location: "Berlin, Allemagne",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Julian König",
      role: "Développeur Senior",
      company: "J&S-Soft GmbH",
      location: "Zurich, Suisse",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Pradumna V Saraf",
      role: "Développeur Open Source",
      company: "Indépendant",
      location: "Patna, Inde",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="py-16 bg-light text-center"
    >
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-accent mb-4">
          Rejoignez Notre Communauté
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Rejoignez des centaines de membres qui soutiennent notre mission à
          travers le monde. Connectez-vous avec nous pour échanger, apprendre et
          grandir ensemble.
        </p>
      </div>

      {/* Members Section */}
      <div className="flex justify-center gap-8 flex-wrap">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="w-72 bg-neutral p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-primary">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-sm text-gray-500">{member.company}</p>
            <p className="text-sm text-secondary mt-2">{member.location}</p>
            <a
              href="#"
              className="text-primary mt-4 inline-block text-sm font-bold"
            >
              En savoir plus →
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12">
        <p className="text-gray-600">
          Découvrez comment vous pouvez contribuer à notre mission.
        </p>
        <a
          href="#"
          className="mt-4 inline-block bg-primary text-light px-6 py-3 rounded-full shadow-md hover:bg-secondary transition"
        >
          Rejoignez-nous maintenant
        </a>
      </div>
    </motion.div>
  );
}

export default Community;
