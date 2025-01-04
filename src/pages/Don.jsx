import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function Don() {
  const validationSchema = Yup.object({
    amount: Yup.number()
      .min(10, "Le montant minimum est de 10 MAD")
      .required("Veuillez entrer un montant."),
    name: Yup.string().required("Veuillez entrer votre nom."),
    email: Yup.string()
      .email("Veuillez entrer un email valide.")
      .required("Veuillez entrer votre email."),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const stripe = await stripePromise;

    try {
      const response = await fetch("https://kittynest-backend-test.vercel.app/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: values.amount * 100, // Convertir en centimes
          name: values.name,
          email: values.email,
        }),
      });

      const session = await response.json();

      if (session.id) {
        stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur lors du traitement. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-light flex items-center justify-center p-6 mt-16"
    >
      <div className="bg-neutral w-full max-w-4xl rounded-lg shadow-lg p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-accent mb-4">Faire un Don</h1>
          <p className="text-gray-600">
            Contribuez à aider les chats en détresse. Chaque don compte et fait
            une différence.
          </p>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-light p-6 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-2xl font-bold text-accent mb-4">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Saisissez vos informations et le montant du don.</li>
            <li>Cliquez sur "Payer avec Stripe".</li>
            <li>Vous serez redirigé vers Stripe pour compléter le paiement.</li>
            <li>Une fois le paiement réussi, vous recevrez une preuve vidéo par email, WhatsApp, et SMS.</li>
            <li>Un reçu téléchargeable sera disponible après le paiement.</li>
          </ol>
        </motion.div>

        {/* Form */}
        <Formik
          initialValues={{
            amount: "",
            name: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Montant du Don (MAD)
                </label>
                <Field
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Entrez le montant"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <ErrorMessage
                  name="amount"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom complet
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
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
                  className="block text-sm font-medium text-gray-700"
                >
                  Adresse Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-light rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-secondary"
              >
                Payer avec Stripe
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
}

export default Don;
