import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();
  
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedFiles((prev) =>
      checked ? [...prev, value] : prev.filter((file) => file !== value)
    );
  };

  const handleVerification = () => {
    navigate('/dashboard');
  };

  // Generate random apartment details
  const apartmentOptions = [
    { id: 1, name: "Sharma Residence", number: "A-401, Krishna Heights" },
    { id: 2, name: "Patel Villa", number: "B-203, Sunshine Apartments" },
    { id: 3, name: "Kumar House", number: "C-105, Green Valley Towers" },
    { id: 4, name: "Singh Manor", number: "D-602, Royal Palms" },
    { id: 5, name: "Gupta Niwas", number: "E-301, Paradise Heights" },
    { id: 6, name: "Reddy Residence", number: "F-404, Silver Oak Gardens" },
    { id: 7, name: "Iyer Home", number: "G-202, Pearl Residency" },
    { id: 8, name: "Kapoor House", number: "H-501, Golden Park Towers" },
    { id: 9, name: "Mehta Villa", number: "I-303, Diamond Heights" },
    { id: 10, name: "Rao Mansion", number: "J-601, Emerald Bay" }
  ];

  const particlesOptions = {
    background: {
      color: "#0F172A",
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: ["#6D28D9", "#A78BFA", "#FFFFFF"],
      },
      links: {
        color: "#A78BFA",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: ["circle", "polygon"],
        polygon: {
          sides: 5,
        },
      },
      size: {
        value: { min: 3, max: 7 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="relative bg-background text-white min-h-screen">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-3xl font-bold mb-8 text-center">Select Your Residence</h1>
          
          <div className="space-y-4 mb-8">
            {apartmentOptions.map((apt) => (
              <div key={apt.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                <input
                  type="checkbox"
                  id={`apt-${apt.id}`}
                  value={apt.id}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor={`apt-${apt.id}`} className="flex-1 cursor-pointer">
                  <div className="font-medium">{apt.name}</div>
                  <div className="text-sm text-gray-300">{apt.number}</div>
                </label>
              </div>
            ))}
          </div>
          
          <button
            onClick={handleVerification}
            disabled={selectedFiles.length === 0}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              selectedFiles.length > 0
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-600 cursor-not-allowed text-gray-300'
            }`}
          >
            Apply for Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;