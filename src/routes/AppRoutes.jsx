import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { startProgress, stopProgress } from "../components/ProgressBar";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Signaler from "../pages/Signaler";
import Chats from "../pages/Chats";
import Donations from "../pages/Donations";
import Community from "../pages/Community";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Admin/Dashboard";
import FAQ from "../pages/FAQ";
import Guide from "../pages/Guide";
import Contact from "../pages/Contact";
import Don from "../pages/Don";

const ProgressHandler = () => {
  const location = useLocation();

  useEffect(() => {
    startProgress(); // Démarre la barre de progression
    stopProgress();  // Arrête la barre une fois la navigation terminée
  }, [location]);

  return null;
};

function AppRoutes() {
  return (
    <Router>
      {/* Gestionnaire de barre de progression */}
      <ProgressHandler />
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="signaler" element={<Signaler />} />
          <Route path="chats" element={<Chats />} />
          <Route path="donations" element={<Donations />} />
          <Route path="community" element={<Community />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="guide" element={<Guide />} />
          <Route path="contact" element={<Contact />} />
          <Route path="don" element={<Don />} />
        </Route>

        {/* Routes Auth */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Routes Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chats" element={<Dashboard />} />
          <Route path="donations" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
