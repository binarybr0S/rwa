import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Profile = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: { color: "#0F172A" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: ["#6D28D9", "#A78BFA", "#FFFFFF"] },
      links: {
        color: "#A78BFA",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: { enable: true, speed: 2, outModes: "out" },
      number: { value: 50 },
      opacity: { value: 0.6 },
      shape: { type: ["circle", "polygon"], polygon: { sides: 5 } },
      size: { value: { min: 3, max: 7 } },
    },
    detectRetina: true,
  };

  return (
    <div className="relative bg-background text-white min-h-screen">
      {/* Particles Background */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />
      
      {/* Profile Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen animate-slideLeft">
        <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-sm w-full">
          <h1 className="text-3xl font-bold text-center text-violet-400 mb-6">YOUR PROFILE</h1>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg transition-transform transform hover:scale-105">
              <h2 className="text-lg text-violet-300">Full Name:</h2>
              <p className="font-mono text-lg">Aadi Joshi</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg transition-transform transform hover:scale-105">
              <h2 className="text-lg text-violet-300">Wallet address:</h2>
              <p className="font-mono text-lg">0xC328IEJ2IJ2349824IWO423I4</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg transition-transform transform hover:scale-105">
              <h2 className="text-lg text-violet-300">Last Login:</h2>
              <p className="font-mono text-lg">2024-02-28 09:11:30</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg transition-transform transform hover:scale-105">
              <h2 className="text-lg text-violet-300">Created:</h2>
              <p className="font-mono text-lg">2023-07-15 14:23:45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
