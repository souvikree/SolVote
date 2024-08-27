import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const ConnectWalletButton: React.FC = () => {
  const { connected, disconnect, wallet } = useWallet();

  // Use a placeholder or handle wallet address differently if publicKey is not available
  const walletAddress = connected && wallet?.adapter?.publicKey 
    ? wallet.adapter.publicKey.toBase58() 
    : '';

  return (
    <div className="flex items-center space-x-4">
      {connected ? (
        <div className="flex items-center space-x-2">
          <span className="text-lg">
            {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'No Wallet Connected'}
          </span>
          <button
            onClick={() => disconnect()}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <WalletMultiButton className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300" />
      )}
    </div>
  );
};

export default ConnectWalletButton;
