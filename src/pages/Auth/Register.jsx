import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { startProgress, stopProgress } from "../../components/ProgressBar";

function Register() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    startProgress();
    const timer = setTimeout(() => {
      stopProgress();
      setShowForm(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Le nom doit contenir au moins 2 caractères")
      .required("Le nom est requis"),
    email: Yup.string()
      .email("Veuillez entrer un email valide")
      .required("L'email est requis"),
    password: Yup.string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Le mot de passe est requis"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Les mots de passe doivent correspondre")
      .required("La confirmation du mot de passe est requise"),
  });

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    // Logique pour gérer l'inscription
  };

  const handleOAuthRegister = (provider) => {
    console.log(`Inscription avec ${provider}`);
    // Logique pour gérer OAuth (redirection vers le backend, etc.)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light px-4 sm:px-8">
      {showForm ? (
        <div className="bg-neutral p-6 sm:p-10 md:p-12 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center text-accent">
            Inscription à <span className="text-primary">KittyNest</span>
          </h2>
          <p className="text-center text-sm text-gray-500 mt-2">
            Créez un compte ou utilisez un fournisseur OAuth
          </p>

          {/* OAuth Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={() => handleOAuthRegister("Google")}
              className="flex items-center justify-center gap-3 py-2 px-4 bg-white text-secondary border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              <FaGoogle className="text-xl" />
              <span>S'inscrire avec Google</span>
            </button>
            <button
              onClick={() => handleOAuthRegister("Facebook")}
              className="flex items-center justify-center gap-3 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <FaFacebook className="text-xl" />
              <span>S'inscrire avec Facebook</span>
            </button>
            <button
              onClick={() => handleOAuthRegister("Twitter")}
              className="flex items-center justify-center gap-3 py-2 px-4 bg-blue-400 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
            >
              <FaTwitter className="text-xl" />
              <span>S'inscrire avec Twitter</span>
            </button>
          </div>

          {/* Separator */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative text-center">
              <span className="bg-neutral px-2 text-sm text-gray-500">
                ou continuez avec vos informations
              </span>
            </div>
          </div>

          {/* Formulaire d'inscription */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Champ Nom */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom Complet
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Votre nom complet"
                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                {/* Champ Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Adresse Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Votre email"
                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                {/* Champ Mot de passe */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mot de Passe
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Votre mot de passe"
                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                {/* Champ Confirmation Mot de passe */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirmez le Mot de Passe
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirmez votre mot de passe"
                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                {/* Bouton Soumettre */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-light rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-secondary"
                >
                  Créer un Compte
                </button>

                {/* Lien pour se connecter */}
                <div className="text-center text-sm text-gray-500 mt-4">
                  Déjà inscrit ?{" "}
                  <Link
                    to="/auth/login"
                    className="text-primary underline hover:text-accent transition"
                  >
                    Se Connecter
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : null}
    </div>
  );
}

export default Register;
