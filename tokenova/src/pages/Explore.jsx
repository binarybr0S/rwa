import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Explore = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

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
    <div className="relative min-h-screen bg-background text-white">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 p-8 mt-12">
        <div className="max-w-4xl mx-auto animate-slideLeft">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">EXPLORE ASSETS</h1>
            </div>

            <div className="space-y-6">
              {/* Section 1 */}
              <div className="bg-gray-700 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Aadi Joshi's Assets</h2>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105"></div>
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105"></div>
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105"></div>
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105"></div>
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105"></div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-gray-700 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">
                  Ajaya Nandiyawar's Assets
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105"></div>
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
