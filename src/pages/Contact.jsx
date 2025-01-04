import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Le nom doit comporter au moins 3 caractères")
      .required("Le nom est requis"),
    email: Yup.string()
      .email("Email invalide")
      .required("L'email est requis"),
    subject: Yup.string()
      .min(5, "Le sujet doit comporter au moins 5 caractères")
      .required("Le sujet est requis"),
    message: Yup.string()
      .min(10, "Le message doit comporter au moins 10 caractères")
      .required("Le message est requis"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formulaire soumis :", values);
    resetForm();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-light flex items-center justify-center p-6 mt-16"
    >
      <div className="bg-neutral w-full max-w-6xl rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Colonne gauche : Réseaux sociaux */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-secondary p-8 flex flex-col justify-between text-light space-y-6"
        >
          <h2 className="text-3xl font-bold">Connectez-vous avec nous</h2>
          <p className="text-light">
            Suivez-nous sur nos réseaux sociaux ou contactez-nous directement
            pour toute question.
          </p>
          <div className="space-y-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-blue-600 transition"
            >
              <FaFacebook className="text-2xl" />
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-pink-500 transition"
            >
              <FaInstagram className="text-2xl" />
              <span>Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-blue-400 transition"
            >
              <FaTwitter className="text-2xl" />
              <span>Twitter</span>
            </a>
          </div>
          <a
            href="https://wa.me/+212611385"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block py-2 px-4 bg-light text-secondary text-center rounded-lg shadow-md transition hover:bg-accent hover:text-white"
          >
            Contactez-nous sur WhatsApp
          </a>
        </motion.div>

        {/* Colonne droite : Formulaire */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-8 bg-neutral"
        >
          <h2 className="text-2xl font-bold text-accent mb-6 text-center">
            Envoyez-nous un message
          </h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-accent"
                  >
                    Nom complet
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none bg-light"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-accent"
                  >
                    Adresse email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none bg-light"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-accent"
                  >
                    Sujet
                  </label>
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Sujet"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none bg-light"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-accent"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    rows="5"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none bg-light"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 bg-primary text-light rounded-lg shadow-md transition-transform
                   duration-300 hover:bg-secondary"
                >
                  Envoyer
                </button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
