import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {
        const token = Cookies.get('token');
        fetch("http://localhost:5080/api/users/me", {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': token
          },
        })
        .then(res => res.json())
        .then(res => {setUserName(res.user.name)});
    }
    fetchUsername();

    const checkWallet = async () => {
      const walletAddress = localStorage.getItem('walletAddress');
      const walletBalance = localStorage.getItem('walletBalance');

      if (!walletAddress) {
        navigate('/');
        return;
      }

      // Update balance in real-time
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const latestBalance = await provider.getBalance(walletAddress);
        const balanceInEth = ethers.utils.formatEther(latestBalance);
        setBalance(balanceInEth);
        localStorage.setItem('walletBalance', balanceInEth);
      } else {
        setBalance(walletBalance);
      }

      setAddress(walletAddress);
      setLoading(false);
    };

    checkWallet();

    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
          // User disconnected wallet
          localStorage.removeItem('walletAddress');
          localStorage.removeItem('walletBalance');
          navigate('/');
        } else {
          // Account changed
          localStorage.setItem('walletAddress', accounts[0]);
          checkWallet();
        }
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => { });
      }
    };
  }, [navigate]);

  const disconnectWallet = () => {
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('walletBalance');
    Cookies.remove('token');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white p-8 mt-12">
      <div className="max-w-4xl mx-auto animate-slideLeft">
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">DASHBOARD</h1>
            <button
              onClick={disconnectWallet}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Disconnect Wallet
            </button>
          </div>



          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Full Name:</h2>
              <p className="font-mono break-all">{userName ? userName : "Loading..."}</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Wallet Address</h2>
              <p className="font-mono break-all">{address}</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Balance</h2>
              <p className="text-2xl font-bold">{parseFloat(balance).toFixed(4)} ETH</p>
            </div>
          </div>
        </div>
        <br></br>


        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="flex justify-between items-center">
  <span className="text-3xl font-bold">YOUR ASSETS</span>
  <a
    href="/explore"
    className="bg-primary px-3 py-2 rounded-lg text-white hover:bg-accent transition-transform transform hover:scale-105"
  >
    <span className="inline-flex items-center">
      <span className="font-bold ml-1">Explore Assets</span>
    </span>
  </a>
</div>


            <div className="space-y-6 flex flex-wrap justify-center items-center gap-16">
              <div className="bg-gray-700 p-6 rounded-lg w-48 h-48 relative">
                <h2 className="text-xl font-semibold">Full Name:</h2>
                <p className="font-mono break-all">{userName ? userName : "Loading..."}</p>
              </div>


            </div>
          </div></div>

      </div>
    </div>
  );
};

export default Dashboard;