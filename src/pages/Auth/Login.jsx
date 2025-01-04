import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { startProgress, stopProgress } from "../../components/ProgressBar";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light p-5">
      {showForm ? (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-10">
          

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
              <Form className="space-y-6 bg-neutral px-20 py-9 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-accent text-center">
                  Connexion à <span className="text-primary">KittyNest</span>
                </h2>

                <div className="space-y-4">
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-secondary"
                    >
                      Adresse Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Votre email"
                      className="w-full mt-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-secondary"
                    >
                      Mot de Passe
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Votre mot de passe"
                      className="w-full mt-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative overflow-hidden px-6 py-3 bg-primary text-light text-sm rounded-full shadow-md transition duration-300 w-full flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative">Se Connecter</span>
                </button>

                {/* Additional Links */}
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
