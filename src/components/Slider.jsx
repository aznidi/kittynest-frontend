import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import heroImage from "../assets/hero.jpg";
// Importation des icônes depuis React Icons
import { FaPaw, FaHeart, FaBone, FaClinicMedical } from "react-icons/fa";

const cats = [
  {
    id: 1,
    name: "Milo",
    description: "Trouvé blessé près d'un parc, Milo a besoin de soins urgents.",
    date: "Publié il y a 2 jours",
    image: heroImage,
    icon: <FaPaw className="text-primary text-3xl" />, // Patte
  },
  {
    id: 2,
    name: "Luna",
    description: "Abandonnée dans une rue animée, Luna cherche un refuge.",
    date: "Publié il y a 1 jour",
    image: heroImage,
    icon: <FaHeart className="text-red-500 text-3xl" />, // Cœur
  },
  {
    id: 3,
    name: "Simba",
    description: "Blessé à la patte avant, Simba a besoin d'une opération.",
    date: "Publié il y a 3 jours",
    image: heroImage,
    icon: <FaClinicMedical className="text-accent text-3xl" />, // Clinique
  },
  {
    id: 4,
    name: "Bella",
    description: "Très maigre et en danger, Bella a besoin de nourriture.",
    date: "Publié il y a 4 jours",
    image: heroImage,
    icon: <FaBone className="text-secondary text-3xl" />, // Os
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function Slider() {
  return (
    <motion.div
      className="min-h-screen bg-neutral py-16"
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
          Chats en Besoin d'Aide Urgente
        </motion.h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {cats.map((cat) => (
            <SwiperSlide key={cat.id}>
              <motion.div
                className="bg-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between h-[450px] relative"
                variants={cardVariants}
              >
                {/* Icon */}
                <div className="absolute top-4 left-4">{cat.icon}</div>
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                {/* Details */}
                <h3 className="text-xl font-bold text-secondary mb-2">{cat.name}</h3>
                <p className="text-secondary text-sm mb-4">{cat.description}</p>
                <p className="text-gray-400 text-xs">{cat.date}</p>
                {/* Actions */}
                <div className="flex flex-col space-y-4 mt-4">
                  {/* Donner Maintenant */}
                  <button className="group relative overflow-hidden px-6 py-3 bg-primary text-light text-sm rounded-full shadow-md transition duration-300">
                    <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative flex items-center space-x-2">
                      <span>Donner Maintenant</span>
                      <span className="inline-block text-xl group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </button>
                  {/* Voir Détails */}
                  <a
                    href="#"
                    className="text-center text-secondary mt-5 text-sm underline hover:text-accent transition duration-300"
                  >
                    Voir Détails
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default Slider;
