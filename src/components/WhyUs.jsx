import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import bim from "../assets/bim.png";
import cash_plus from "../assets/cash_plus.png";
import cih from "../assets/cih.png";
import marjane from "../assets/marjane.png";
import oncf from "../assets/oncf.png";
import radisson from "../assets/radisson.png";
import sidi_ali from "../assets/sidi_ali.png";
import wafacash from "../assets/wafacash.png";

function WhyUs() {
  const partners = [
    { id: 1, name: "bim", img: bim },
    { id: 2, name: "Cash Plus", img: cash_plus },
    { id: 3, name: "cih", img: cih },
    { id: 4, name: "marjane", img: marjane },
    { id: 5, name: "ONCF", img: oncf },
    { id: 6, name: "radisson", img: radisson },
    { id: 7, name: "sidi_ali", img: sidi_ali },
    { id: 8, name: "wafacash", img: wafacash },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="py-16 text-center"
    >
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-accent">Pourquoi nous choisir ?</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Rejoignez des organisations et individus qui soutiennent notre mission. Votre confiance nous motive à
          sauver des vies.
        </p>
      </div>

      {/* Slider Section */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="max-w-6xl mx-auto py-6 p-6 mt-5"
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center p-4  hover:shadow-md transition"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="opacity-50 object-contain h-12 w-auto "
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default WhyUs;
