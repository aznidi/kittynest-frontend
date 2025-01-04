import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Icônes personnalisées pour Leaflet
const icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
  iconSize: [30, 30],
});

function LocationSelector({ onLocationSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onLocationSelect(e.latlng); // Renvoie la position sélectionnée
    },
  });

  return position ? <Marker position={position} icon={icon} /> : null;
}

function Signaler() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const validationSchema = Yup.object({
    // Ajout de validations personnalisées
    name: Yup.string().required("Le nom est requis"),
    email: Yup.string().email("Email invalide").required("Email requis"),
    description: Yup.string().required("Description requise"),
    // Ajout de validation pour d'autres champs si nécessaires
  });

  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center p-5">
      <Formik
        initialValues={{
          name: "",
          email: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Formulaire soumis :", {
            ...values,
            location: selectedLocation,
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="bg-neutral w-full max-w-lg rounded-lg shadow-lg p-8 space-y-6">
            {/* Étape 1 : Informations Générales */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Étape 1 : Informations Générales
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      Nom Complet
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Votre nom complet"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      Adresse Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-lg"
                >
                  Suivant
                </button>
              </div>
            )}

            {/* Étape 2 : Description */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Étape 2 : Description
                </h2>
                <div>
                  <label className="block text-sm font-medium text-secondary">
                    Description du problème
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    placeholder="Décrivez le problème"
                    rows="4"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-200 rounded-lg"
                  >
                    Précédent
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-primary text-white rounded-lg"
                  >
                    Suivant
                  </button>
                </div>
              </div>
            )}

            {/* Étape 3 : Localisation */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Étape 3 : Localisation
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  Cliquez sur la carte pour sélectionner l'emplacement.
                </p>
                <div className="h-64 w-full mb-4">
                  <MapContainer
                    center={[48.8566, 2.3522]} // Position initiale
                    zoom={13}
                    className="h-full w-full rounded-lg"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <LocationSelector onLocationSelect={handleLocationSelect} />
                  </MapContainer>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-200 rounded-lg"
                  >
                    Précédent
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-white rounded-lg"
                    disabled={isSubmitting}
                  >
                    Soumettre
                  </button>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signaler;
