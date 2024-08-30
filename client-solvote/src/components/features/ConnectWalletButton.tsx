"use client";
import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

const ConnectWalletButton: React.FC = () => {
  const { connected, disconnect, publicKey, connecting } = useWallet();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const walletAddress = connected && publicKey ? publicKey.toBase58() : '';

  if (!isClient) {
    return null; // Or a loading state if needed
  }

  return (
    <div className="flex items-center space-x-4">
      {connecting ? (
        <span className="text-lg">Connecting...</span>
      ) : connected ? (
        <div className="flex items-center space-x-2">
          <span className="text-lg">
            {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'No Wallet Connected'}
          </span>
          <button
            onClick={() => disconnect()}
            className="text-white px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors duration-300"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <WalletMultiButton />
      )}
    </div>
  );
};

export default ConnectWalletButton;
