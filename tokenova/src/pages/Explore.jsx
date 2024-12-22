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
              <div className="bg-gray-700 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Aadi Joshi's Assets</h2>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-4">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Property 1"
                      className="rounded-lg object-cover w-full h-24 mb-2"
                    />
                    <p className="text-white text-center text-sm line-clamp-2">
                      Luxury Apartment in Downtown: A modern 2-bedroom apartment with stunning city views and a spacious balcony.
                    </p>
                  </div>
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-4">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Property 2"
                      className="rounded-lg object-cover w-full h-24 mb-2"
                    />
                    <p className="text-white text-center text-sm line-clamp-2">
                      Beachfront Villa: A luxurious 3-bedroom villa located by the beach with private pool and garden.
                    </p>
                  </div>
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-4">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Property 3"
                      className="rounded-lg object-cover w-full h-24 mb-2"
                    />
                    <p className="text-white text-center text-sm line-clamp-2">
                      Mountain Retreat: A cozy 1-bedroom cabin situated in the mountains, ideal for weekend getaways.
                    </p>
                  </div>
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-4">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Property 4"
                      className="rounded-lg object-cover w-full h-24 mb-2"
                    />
                    <p className="text-white text-center text-sm line-clamp-2">
                      Urban Loft: A stylish 1-bedroom loft in the heart of the city, perfect for young professionals.
                    </p>
                  </div>
                  <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-4">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Property 5"
                      className="rounded-lg object-cover w-full h-24 mb-2"
                    />
                    <p className="text-white text-center text-sm line-clamp-2">
                      Countryside Cottage: A peaceful 2-bedroom cottage located in a scenic countryside, ideal for nature lovers.
                    </p>
                  </div>
                </div>

              </div>

              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-3">Ajaya Nandiyawar's Assets</h2>
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-4">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Property 1"
                        className="rounded-lg object-cover w-full h-24 mb-2"
                      />
                      <p className="text-white text-center text-sm line-clamp-2">
                        Luxury Apartment in Downtown: A modern 2-bedroom apartment with stunning city views and a spacious balcony.
                      </p>
                    </div>
                    <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-4">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Property 2"
                        className="rounded-lg object-cover w-full h-24 mb-2"
                      />
                      <p className="text-white text-center text-sm line-clamp-2">
                        Beachfront Villa: A luxurious 3-bedroom villa located by the beach with private pool and garden.
                      </p>
                    </div>
                    <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-4">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Property 3"
                        className="rounded-lg object-cover w-full h-24 mb-2"
                      />
                      <p className="text-white text-center text-sm line-clamp-2">
                        Mountain Retreat: A cozy 1-bedroom cabin situated in the mountains, ideal for weekend getaways.
                      </p>
                    </div>
                    <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-4">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Property 4"
                        className="rounded-lg object-cover w-full h-24 mb-2"
                      />
                      <p className="text-white text-center text-sm line-clamp-2">
                        Urban Loft: A stylish 1-bedroom loft in the heart of the city, perfect for young professionals.
                      </p>
                    </div>
                    <div className="bg-gray-600 rounded-lg w-60 h-48 transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-4">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Property 5"
                        className="rounded-lg object-cover w-full h-24 mb-2"
                      />
                      <p className="text-white text-center text-sm line-clamp-2">
                        Countryside Cottage: A peaceful 2-bedroom cottage located in a scenic countryside, ideal for nature lovers.
                      </p>
                    </div>
                  </div>

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
