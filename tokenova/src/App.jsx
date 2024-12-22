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
import Transfer from "./pages/Transfer";

const App = () => {
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
            <Route path="/transfer" element={<Transfer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
