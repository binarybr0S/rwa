import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useNavigate } from 'react-router-dom';

const Transfer = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  const navigate = useNavigate();

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
        <form className="bg-secondary p-8 rounded-lg shadow-lg max-w-md w-full border border-gray-600">
          <h2 className="text-2xl font-bold mb-6 text-primary">TRANSFER OF OWNERSHIP</h2>
          Sender's address:
          <input
            type="email"
            value={localStorage.getItem("walletAddress")}
            placeholder={localStorage.getItem("walletAddress")}
            className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-accent"
            readOnly
            style={{ filter: "blur(0.5px)" }}
          />

          Receiver's address:
          <input
            type="password"
            placeholder="Enter wallet address"
            className="w-full p-3 mb-6 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-accent"
          />

          {/* Select with matching color scheme */}
          <select
            className="w-full p-3 mb-6 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-primary border border-accent"
          >
            <option>A-923 Ganga Nagar, Kalyani</option>
            <option>F-92E Rohan Minar, Vimam Nagar</option>
            <option>DD-2 Aryan Colony, Viman Nagar</option>
            <option>Flat 332 Sunshine Colony, PCMC</option>
          </select>

          <button
            type="submit"
            className="bg-primary w-full py-3 rounded hover:bg-accent text-white font-bold"
            onClick={()=>{
                navigate('/dashboard');
            }}
          >
            IMMEDIATE TRANSFER
          </button>

          <div className="grid place-items-center">
            <span className="text-red-600 mt-2 font-bold">
              NOTE: THIS ACTION IS IRREVERSIBLE
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
