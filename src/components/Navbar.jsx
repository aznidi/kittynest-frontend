import React, { useState, useEffect, useRef } from 'react';
import { FaCat } from 'react-icons/fa';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenuRef = useRef();

  // Gérer les clics en dehors du menu mobile
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  // Animation pour les dropdowns
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Animation pour le menu mobile
  const mobileMenuVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative z-50">
      {/* Navbar Container */}
      <nav className="fixed top-0 left-0 w-full bg-transparent blur-0 bg-opacity-90 backdrop-blur-lg shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12 py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <FaCat className="text-primary text-3xl" />
            <span className="text-xl md:text-2xl font-bold text-primary">KittyNest</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-accent font-medium">
            <a
              href="/"
              className="hover:text-primary transition duration-300 text-sm lg:text-base"
            >
              Accueil
            </a>
            <div className="relative group">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'ressources' ? null : 'ressources')
                }
                className="flex items-center hover:text-primary transition duration-300 text-sm lg:text-base"
              >
                Ressources
                <FiChevronDown className="ml-1 text-lg text-gray-600" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'ressources' && (
                  <motion.div
                    className="absolute left-0 top-full mt-2 bg-light shadow-lg rounded-md w-48"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                  >
                    <a
                      href="/guide"
                      className="block px-4 py-2 text-accent hover:bg-neutral transition"
                    >
                      Guide
                    </a>
                    <a
                      href="/faq"
                      className="block px-4 py-2 text-accent hover:bg-neutral transition"
                    >
                      FAQ
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a
              href="/signaler"
              className="hover:text-primary transition duration-300 text-sm lg:text-base"
            >
              Signaler un Chat
            </a>
            <a
              href="/chats"
              className="hover:text-primary transition duration-300 text-sm lg:text-base"
            >
              Chats Disponibles
            </a>
            <a
              href="/don"
              className="hover:text-primary transition duration-300 text-sm lg:text-base"
            >
              Faire un Don
            </a>
          </div>

          {/* Login/Sign Up Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 lg:px-5 py-2 bg-primary text-light text-sm lg:text-base rounded-full shadow-md hover:bg-secondary transition duration-300">
              S'inscrire
            </button>
            <button className="px-4 lg:px-5 py-2 bg-secondary text-light text-sm lg:text-base rounded-full shadow-md hover:bg-primary transition duration-300">
              Connexion
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-light text-3xl focus:outline-none"
            >
              {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
            <motion.div
              ref={mobileMenuRef}
              className="fixed top-0 left-0 w-64 h-full bg-accent bg-opacity-95 text-light flex flex-col space-y-6 p-6 z-50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              <a href="/" className="hover:text-primary transition duration-300">
                Accueil
              </a>
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'ressources-mobile' ? null : 'ressources-mobile')
                  }
                  className="flex items-center justify-between w-full text-left hover:text-primary transition duration-300"
                >
                  Ressources
                  <FiChevronDown className="ml-1 text-lg text-gray-400" />
                </button>
                {activeDropdown === 'ressources-mobile' && (
                  <div className="mt-2 space-y-2 pl-4">
                    <a href="/guide" className="block text-light hover:text-primary">
                      Guide
                    </a>
                    <a href="/faq" className="block text-light hover:text-primary">
                      FAQ
                    </a>
                  </div>
                )}
              </div>
              <a href="/signaler" className="hover:text-primary transition duration-300">
                Signaler un Chat
              </a>
              <a href="/chats" className="hover:text-primary transition duration-300">
                Chats Disponibles
              </a>
              <a href="/don" className="hover:text-primary transition duration-300">
                Faire un Don
              </a>
              <div className="space-y-4 mt-4">
                <button className="px-4 py-2 bg-primary text-light rounded-full shadow-md hover:bg-secondary transition duration-300">
                  S'inscrire
                </button>
                <button className="px-4 py-2 bg-secondary text-light rounded-full shadow-md hover:bg-primary transition duration-300">
                  Connexion
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
