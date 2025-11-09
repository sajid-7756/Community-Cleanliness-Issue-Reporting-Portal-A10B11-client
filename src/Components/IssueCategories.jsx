import React from "react";
import { FaTrash, FaHammer, FaTools, FaRoad } from "react-icons/fa";
import Container from "./Container";

const categories = [
  {
    id: 1,
    title: "Illegal Dumping & Waste",
    description: "Unauthorized disposal of garbage, bulk trash, and debris.",
    icon: <FaTrash size={32} />,
    gradient: "from-red-500 to-orange-500",
    count: 14,
  },
  {
    id: 2,
    title: "Construction Violations",
    description: "Unpermitted work, noise complaints, or safety hazards.",
    icon: <FaHammer size={32} />,
    gradient: "from-yellow-500 to-amber-600",
    count: 7,
  },
  {
    id: 3,
    title: "Property & Zoning",
    description: "Dilapidated buildings, overgrown yards, zoning issues.",
    icon: <FaTools size={32} />,
    gradient: "from-blue-500 to-cyan-500",
    count: 22,
  },
  {
    id: 4,
    title: "Road & Infrastructure",
    description: "Potholes, broken streetlights, damaged signs.",
    icon: <FaRoad size={32} />,
    gradient: "from-purple-500 to-pink-500",
    count: 9,
  },
];

const App = () => {
  return (
    <Container className="min-h-screen p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Issue <span className="text-accent">Categories</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group p-6 rounded-xl"
          >
            <div
              className={`w-16 h-16 rounded-xl bg-linear-to-br ${cat.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
            >
              {cat.icon}
            </div>

            <h3 className="text-gray-800 mb-2">{cat.title}</h3>
            <p className="text-gray-600 mb-4">{cat.description}</p>

            <div className="badge badge-lg bg-emerald-100 text-emerald-700 border-none">
              {cat.count} {cat.count === 1 ? "Issue" : "Issues"}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default App;
