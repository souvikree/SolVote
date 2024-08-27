import React, { createContext, useContext, useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider as SolanaWalletProvider,
  useWallet,
  WalletContextState,
} from '@solana/wallet-adapter-react';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolongWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, PublicKey } from '@solana/web3.js';

// Define the context type
interface WalletContextType {
  publicKey: PublicKey | null;
  connected: boolean;
  disconnect: () => void;
  connect: () => void;
  walletState: WalletContextState;
}

const WalletContext = createContext<WalletContextType | null>(null);

export const WalletContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const network = 'devnet'; // Use 'mainnet-beta' for production
  const endpoint = clusterApiUrl(network);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolongWalletAdapter(),
    ],
    []
  );

  const { publicKey, connected, disconnect, connect } = useWallet();

  return (
    <ConnectionProvider endpoint={endpoint}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        <WalletContext.Provider value={{ publicKey, connected, disconnect, connect, walletState: useWallet() }}>
          {children}
        </WalletContext.Provider>
      </SolanaWalletProvider>
    </ConnectionProvider>
  );
};

export const useWalletContext = () => useContext(WalletContext);
