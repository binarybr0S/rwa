import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import MetamaskAuth from "./pages/MetamaskAuth";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Explore from "./pages/Explore";
import Transactions from "./pages/Transactions";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import LandOwnershipABI from "./LandOwnership.json";

const CONTRACT_ADDRESS = "<Deployed_Contract_Address>";

const App = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [lands, setLands] = useState([]);
  const [newLand, setNewLand] = useState({ location: "", price: "" });
  const [transferDetails, setTransferDetails] = useState({ landId: "", newOwner: "" });

  // Connect to MetaMask and initialize contract
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, LandOwnershipABI.abi, signer);

      setProvider(provider);
      setSigner(signer);
      setContract(contract);
    } else {
      alert("MetaMask not detected!");
    }
  };

  // Register a new land
  const registerLand = async () => {
    if (!contract) return;
    const tx = await contract.registerLand(newLand.location, ethers.utils.parseEther(newLand.price));
    await tx.wait();
    alert("Land registered successfully!");
    fetchLands(); // Refresh the land list
  };

  // Fetch all registered lands
  const fetchLands = async () => {
    if (!contract) return;
    const landsArray = [];
    for (let i = 1; i <= await contract.landCount(); i++) {
      const land = await contract.lands(i);
      landsArray.push({
        id: land.id.toString(),
        location: land.location,
        price: ethers.utils.formatEther(land.price),
        owner: land.currentOwner,
      });
    }
    setLands(landsArray);
  };

  // Transfer ownership of a land
  const transferOwnership = async () => {
    if (!contract) return;
    const tx = await contract.transferOwnership(
      parseInt(transferDetails.landId),
      transferDetails.newOwner
    );
    await tx.wait();
    alert("Ownership transferred successfully!");
    fetchLands(); // Refresh the land list
  };

  useEffect(() => {
    if (contract) fetchLands();
  }, [contract]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/metamaskauth" element={<MetamaskAuth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transaction-history" element={<Transactions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/test" element={
                  <div className="m-5">
                  <h1>Land Ownership DApp</h1>
                  <button onClick={connectWallet}>Connect Wallet</button>
            
                  <h2>Register Land</h2>
                  <input
                    type="text"
                    placeholder="Location"
                    value={newLand.location}
                    onChange={(e) => setNewLand({ ...newLand, location: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Price (in ETH)"
                    value={newLand.price}
                    onChange={(e) => setNewLand({ ...newLand, price: e.target.value })}
                  />
                  <button onClick={registerLand}>Register</button>
            
                  <h2>Registered Lands</h2>
                  <ul>
                    {lands.map((land) => (
                      <li key={land.id}>
                        ID: {land.id}, Location: {land.location}, Price: {land.price} ETH, Owner: {land.owner}
                      </li>
                    ))}
                  </ul>
            
                  <h2>Transfer Ownership</h2>
                  <input
                    type="text"
                    placeholder="Land ID"
                    value={transferDetails.landId}
                    onChange={(e) => setTransferDetails({ ...transferDetails, landId: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="New Owner Address"
                    value={transferDetails.newOwner}
                    onChange={(e) => setTransferDetails({ ...transferDetails, newOwner: e.target.value })}
                  />
                  <button onClick={transferOwnership}>Transfer</button>
                </div>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
