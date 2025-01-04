import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Icône personnalisée pour Leaflet
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
  iconSize: [30, 30],
});

// Composant pour gérer les événements de la carte
const MapEvents = ({ setSelectedLocation, setFieldValue }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setSelectedLocation({ lat, lng });

      // Geocoding inversé pour remplir les champs "rue" et "ville"
      const geocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
      fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
          const { address } = data;
          if (address) {
            setFieldValue("city", address.city || address.town || "");
            setFieldValue("street", address.road || "");
          }
        })
        .catch((err) => console.error("Erreur de géocodage inverse :", err));
    },
  });
  return null;
};

function Signaler() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 33.5731,
    lng: -7.5898,
  }); // Casablanca par défaut
  const [previewImage, setPreviewImage] = useState(null);

  const validationSchemas = [
    Yup.object({
      name: Yup.string().required("Le nom est requis"),
      email: Yup.string().email("Email invalide").required("Email requis"),
      phone: Yup.string()
        .matches(
          /^\+212\s\d{9}$/,
          "Le numéro doit être au format +212 suivi de 9 chiffres"
        )
        .required("Le numéro de téléphone est requis"),
    }),
    Yup.object({
      description: Yup.string().required("La description est requise"),
      photo: Yup.mixed().required("Une photo est requise"),
    }),
    Yup.object({
      city: Yup.string().required("La ville est requise"),
      street: Yup.string().required("La rue est requise"),
    }),
  ];

  const updateMapLocation = (city, street) => {
    if (city && street) {
      const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        `${street}, ${city}`
      )}`;
      fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            setSelectedLocation({ lat: parseFloat(lat), lng: parseFloat(lon) });
          }
        })
        .catch((err) => console.error("Erreur de géocodage :", err));
    }
  };

  const handleNextStep = async (validateForm) => {
    const errors = await validateForm();
    if (Object.keys(errors).length === 0) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center p-5">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "+212 ",
          description: "",
          photo: null,
          city: "",
          street: "",
        }}
        validationSchema={validationSchemas[currentStep - 1]}
        onSubmit={(values) => {
          console.log("Formulaire soumis :", {
            ...values,
            location: selectedLocation,
          });
        }}
      >
        {({ isSubmitting, validateForm, setFieldValue, values }) => (
          <Form className="bg-neutral w-full max-w-3xl rounded-lg shadow-lg p-8 space-y-6">
            {/* Étape 1 */}
            {currentStep === 1 && (
              <div className="animate-fadeIn">
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
                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      Numéro de Téléphone
                    </label>
                    <Field
                      type="text"
                      name="phone"
                      placeholder="+212 600000000"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleNextStep(validateForm)}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow-md"
                >
                  Suivant
                </button>
              </div>
            )}

            {/* Étape 2 */}
            {currentStep === 2 && (
              <div className="animate-fadeIn">
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
                <div>
                  <label className="block text-sm font-medium text-secondary mb-5">
                    Photo du chat
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      setFieldValue("photo", file);
                      const reader = new FileReader();
                      reader.onload = (e) => setPreviewImage(e.target.result);
                      reader.readAsDataURL(file);
                    }}
                    className="hidden"
                    id="upload-photo"
                  />
                  <label
                    htmlFor="upload-photo"
                    className="px-6 py-2 bg-primary text-white rounded-lg shadow-md cursor-pointer"
                  >
                    Choisir une photo
                  </label>
                  <ErrorMessage
                    name="photo"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="Aperçu"
                      className="mt-4 w-32 h-32 object-cover rounded-lg shadow-md"
                    />
                  )}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-200 rounded-lg shadow-md"
                  >
                    Précédent
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNextStep(validateForm)}
                    className="px-6 py-2 bg-primary text-white rounded-lg shadow-md"
                  >
                    Suivant
                  </button>
                </div>
              </div>
            )}

            {/* Étape 3 */}
            {currentStep === 3 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Étape 3 : Localisation
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      Ville
                    </label>
                    <Field
                      type="text"
                      name="city"
                      placeholder="Ex: Casablanca"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                      onChange={(e) => {
                        setFieldValue("city", e.target.value);
                        updateMapLocation(e.target.value, values.street);
                      }}
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary">
                      Rue
                    </label>
                    <Field
                      type="text"
                      name="street"
                      placeholder="Ex: Avenue des FAR"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                      onChange={(e) => {
                        setFieldValue("street", e.target.value);
                        updateMapLocation(values.city, e.target.value);
                      }}
                    />
                    <ErrorMessage
                      name="street"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                <div className="h-64 w-full rounded-lg mb-4">
                  <MapContainer
                    center={selectedLocation}
                    zoom={13}
                    className="h-full w-full"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={selectedLocation} icon={markerIcon} />
                    <MapEvents
                      setSelectedLocation={setSelectedLocation}
                      setFieldValue={setFieldValue}
                    />
                  </MapContainer>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-200 rounded-lg shadow-md"
                  >
                    Précédent
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-white rounded-lg shadow-md"
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
