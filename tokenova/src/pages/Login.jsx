import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Login = () => {
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
      <div className="relative z-10 min-h-screen flex items-center justify-center animate-slideLeft">
        <form className="bg-secondary p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-primary">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary border-2 border-accent"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary border-2 border-accent"
          />
          <button
            type="submit"
            className="bg-primary w-full py-3 rounded hover:bg-accent text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;