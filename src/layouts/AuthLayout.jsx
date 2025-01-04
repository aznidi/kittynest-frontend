import React from "react";
import { Outlet } from "react-router-dom"; // Importation d'Outlet pour les routes imbriquées
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AuthLayout() {
  return (
    <div className="flex flex-col bg-light">
      {/* Navbar */}
      <Navbar />
      <main className="flex-grow min-h-screen flex items-center justify-center py-12">
          {/* Rendu des routes imbriquées */}
          <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AuthLayout;
