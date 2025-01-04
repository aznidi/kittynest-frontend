import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
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
    // Traitement de l'inscription
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light">
      {showForm ? (
        <div className="flex flex-col items-center w-full max-w-3xl space-y-6">
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
              <Form className="space-y-6 bg-neutral px-16 py-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-accent text-center">
                  Inscription à <span className="text-primary">KittyNest</span>
                </h2>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-secondary"
                    >
                      Nom Complet
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Votre nom complet"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-secondary"
                    >
                      Confirmez le Mot de Passe
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirmez votre mot de passe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative overflow-hidden px-6 py-3 bg-primary text-light text-sm rounded-full shadow-md transition duration-300 w-full flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative">Créer un Compte</span>
                </button>

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
