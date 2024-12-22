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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
