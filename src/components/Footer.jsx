import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-accent text-light py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">KittyNest</h2>
            <p className="text-gray-300 text-sm">
              KittyNest est une plateforme dédiée à l'aide des chats des rues.
              Ensemble, offrons un avenir meilleur à nos compagnons à quatre
              pattes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Liens Utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-primary transition duration-300"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="hover:text-primary transition duration-300"
                >
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a
                  href="/signaler"
                  className="hover:text-primary transition duration-300"
                >
                  Signaler un Chat
                </a>
              </li>
              <li>
                <a
                  href="/donations"
                  className="hover:text-primary transition duration-300"
                >
                  Faire un Don
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Nous Contacter</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@kittynest.com"
                  className="flex items-center space-x-2 hover:text-primary transition duration-300"
                >
                  <FaEnvelope />
                  <span>contact@kittynest.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-primary transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-primary transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-primary transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} KittyNest. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
