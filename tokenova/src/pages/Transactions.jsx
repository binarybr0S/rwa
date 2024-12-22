import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
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

  useEffect(() => {
    document.title = "Tokenova | Transactions";
    fetch("http://localhost:5080/api/transactions/history", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => res.json())
    .then(data => {
      setTransactions(data.transactions)
      console.log(data.transactions);
    })
  }, []);

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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 animate-slideLeft">
        <h1 className="text-4xl font-bold mb-6 text-primary">My Transactions</h1>
        <p className="text-gray-300 max-w-3xl text-center">
          {
            transactions ?
              transactions.map((tx, index) => (
                <div key={index} className="bg-background-light p-4 rounded-md my-2 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">From: {tx.from}</p>
                    <p className="text-lg font-semibold">To: {tx.to}</p>
                    <p className="text-lg font-semibold">Amount: {tx.amount}</p>
                    <p className="text-lg font-semibold">Tx Hash: {tx.txHash}</p>
                    <p className="text-lg font-semibold">Timestamp: {tx.timestamp}</p>
                  </div>
                </div>
              )) :
              "No transactions found"
          }
        </p>
      </div>
    </div>
  );
};

export default Transactions;