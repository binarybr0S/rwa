import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const MetamaskAuth = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="relative bg-background text-white min-h-screen">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-opacity-75"></div>
            <p className="text-lg text-gray-300 mt-4">Fetching data from Digilocker...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
          <p className="font-bold text-2xl">Connect your wallet to access our<br></br> easy ownership transfer solution</p>
          <button
            className="bg-primary px-10 py-4 rounded-lg mt-4 text-white hover:bg-accent transition-transform transform hover:scale-105"
          >
            <span className="inline-flex items-center">
    Continue with<span className="font-bold ml-1">Metamask</span>
    <img src="Metamask.webp" width="30px" className="ml-2" />
  </span>
          </button></div>
        )}
      </div>
    </div>
  );
};

export default MetamaskAuth;
