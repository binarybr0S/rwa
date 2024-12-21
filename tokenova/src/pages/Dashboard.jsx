import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

const Dashboard = () => {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {
      // var res = await fetch("http://localhost:5080/api/users/me", {
      //   headers: {
      //       'Content-Type': 'application/json'
      //   },
      //   cors: 'no-cors'
      // })
      // setUserName(res.user.name);
      setUserName(localStorage.getItem('user.name'));
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
        window.ethereum.removeListener('accountsChanged', () => {});
      }
    };
  }, [navigate]);

  const disconnectWallet = () => {
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('walletBalance');
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
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
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
      </div>
    </div>
  );
};

export default Dashboard;