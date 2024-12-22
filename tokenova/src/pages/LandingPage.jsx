import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Navbar from "../components/Navbar.jsx";

const LandingPage = () => {
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
  {/* Navbar */}
  <Navbar />
  {/* Main Content */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
    {/* Image and Button Wrapper */}
    <div className="flex items-center space-x-4 mb-6">
      <img
        src="/logo2.png"
        alt="Tokenova Logo"
        className="transition-transform transform hover:scale-110 animate-slideLeft"
      />
      <a
  href="/metamaskauth"
  className="bg-primary px-10 py-7 rounded-lg text-white hover:bg-accent transition-transform transform hover:scale-105 animate-slideLeft"
>
  <span className="inline-flex items-center">
    Continue with <span className="font-bold ml-1">DigiLocker</span>
    <img src="digilocker.webp" width="30px" className="ml-2" />
  </span>
</a>

    </div>
    <h1 className="text-5xl font-bold mb-6 text-primary animate-slideLeft">Welcome to TOKENOVA</h1>
    <p className="text-lg text-gray-300 mb-6 max-w-2xl text-center animate-slideLeft">
      A revolutionary platform to exchange ownership of real-world assets securely and seamlessly using blockchain.
    </p>
  </div>
</div>

  );
};

export default LandingPage;
