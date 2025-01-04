import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { startProgress, stopProgress } from "../../components/ProgressBar";

function Login() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    startProgress();
    const timer = setTimeout(() => {
      stopProgress();
      setShowForm(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  // Validation schema with Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Veuillez entrer un email valide")
      .required("L'email est requis"),
    password: Yup.string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Le mot de passe est requis"),
  });

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    // Traitement de l'authentification
  };

  const handleOAuthLogin = (provider) => {
    console.log(`Connexion avec ${provider}`);
    // Logique pour gérer OAuth (redirection vers le backend, etc.)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light px-4 sm:px-8">
      {showForm ? (
        <div className="bg-neutral p-6 sm:p-10 md:p-12 lg:px-16 mt-10 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center text-accent">
            Connexion à <span className="text-primary">KittyNest</span>
          </h2>

          {/* OAuth Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={() => handleOAuthLogin("Google")}
              className="flex items-center justify-center gap-3 py-2 px-4 bg-white text-secondary border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              <FaGoogle className="text-xl" />
              <span>Google</span>
            </button>
            <button
              onClick={() => handleOAuthLogin("Facebook")}
              className="flex items-center justify-center gap-3 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <FaFacebook className="text-xl" />
              <span> Facebook</span>
            </button>
            <button
              onClick={() => handleOAuthLogin("Twitter")}
              className="flex items-center justify-center gap-3 py-2 px-4 bg-blue-400 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
            >
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </button>
          </div>

          {/* Separator */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative text-center">
              <span className="bg-neutral px-2 text-sm text-gray-500">
                ou continuez avec vos identifiants
              </span>
            </div>
          </div>

          {/* Formulaire de connexion */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
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

                {/* Bouton Soumettre */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-light rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-secondary"
                >
                  Se Connecter
                </button>

                {/* Lien pour s'inscrire */}
                <div className="text-center text-sm text-gray-500 mt-4">
                  Pas encore inscrit ?{" "}
                  <Link
                    to="/auth/register"
                    className="text-primary underline hover:text-accent transition"
                  >
                    Créer un compte
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

export default Login;
