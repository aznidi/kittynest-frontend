import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Chats() {
  const [chats, setChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);
  const [filter, setFilter] = useState("");

  // Fetching sample chats data (replace with API call if available)
  useEffect(() => {
    const fetchChats = async () => {
      const sampleChats = [
        { id: 1, name: "Luna", location: "Casablanca", status: "Available" },
        { id: 2, name: "Milo", location: "Rabat", status: "Adopted" },
        { id: 3, name: "Bella", location: "Marrakech", status: "Available" },
        { id: 4, name: "Charlie", location: "Agadir", status: "In Treatment" },
      ];
      setChats(sampleChats);
      setFilteredChats(sampleChats);
    };

    fetchChats();
  }, []);

  // Handle filter changes
  const handleFilterChange = (filter) => {
    setFilter(filter);
    const filtered = chats.filter(
      (chat) =>
        filter === "" || chat.status.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredChats(filtered);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-light p-6 flex flex-col items-center"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent">Chats Disponibles</h1>
        <p className="text-gray-600 mt-2">
          Explorez les chats disponibles et trouvez des détails sur leur statut.
        </p>
      </div>

      {/* Filter Options */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => handleFilterChange("")}
          className={`px-4 py-2 rounded-full ${
            filter === "" ? "bg-secondary text-white" : "bg-neutral text-accent"
          } shadow-md hover:scale-105 transition`}
        >
          Tous
        </button>
        <button
          onClick={() => handleFilterChange("available")}
          className={`px-4 py-2 rounded-full ${
            filter === "available"
              ? "bg-secondary text-white"
              : "bg-neutral text-accent"
          } shadow-md hover:scale-105 transition`}
        >
          Disponibles
        </button>
        <button
          onClick={() => handleFilterChange("adopted")}
          className={`px-4 py-2 rounded-full ${
            filter === "adopted"
              ? "bg-secondary text-white"
              : "bg-neutral text-accent"
          } shadow-md hover:scale-105 transition`}
        >
          Adoptés
        </button>
        <button
          onClick={() => handleFilterChange("treatment")}
          className={`px-4 py-2 rounded-full ${
            filter === "treatment"
              ? "bg-secondary text-white"
              : "bg-neutral text-accent"
          } shadow-md hover:scale-105 transition`}
        >
          En Traitement
        </button>
      </div>

      {/* Chat List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredChats.length === 0 ? (
          <p className="text-gray-600 text-center col-span-full">
            Aucun chat correspondant à votre filtre.
          </p>
        ) : (
          filteredChats.map((chat) => (
            <motion.div
              key={chat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-neutral p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-primary">{chat.name}</h2>
              <p className="text-gray-600 mt-2">
                <strong>Lieu:</strong> {chat.location}
              </p>
              <p className="text-gray-600 mt-1">
                <strong>Statut:</strong>{" "}
                <span
                  className={`${
                    chat.status === "Available"
                      ? "text-green-500"
                      : chat.status === "Adopted"
                      ? "text-blue-500"
                      : "text-yellow-500"
                  }`}
                >
                  {chat.status}
                </span>
              </p>
              <button className="mt-4 px-4 py-2 bg-primary text-light rounded-full shadow-md hover:scale-105 transition">
                Voir Détails
              </button>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}

export default Chats;
