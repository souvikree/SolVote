import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import idl from '../idl/solvote_wallet.json'; // Import IDL

// Define the types for context values
interface SolanaContextType {
  connection: Connection | null;
  program: Program | null;
}

const SolanaContext = createContext<SolanaContextType>({
  connection: null,
  program: null,
});

export const SolanaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [solanaContext, setSolanaContext] = useState<SolanaContextType>({
    connection: null,
    program: null,
  });

  useEffect(() => {
    // Check if window.solana is available
    if (typeof window !== 'undefined' && window.solana) {
      const connection = new Connection('http://localhost:8899', 'confirmed');
      const programID = new PublicKey(idl.metadata.address);
      const provider = new AnchorProvider(connection, window.solana, { preflightCommitment: 'processed' });
      const program = new Program(idl, programID, provider);

      setSolanaContext({ connection, program });
    } else {
      console.error('window.solana is not defined');
    }
  }, []); // Empty dependency array ensures this runs only on client side

  return (
    <SolanaContext.Provider value={solanaContext}>
      {children}
    </SolanaContext.Provider>
  );
};

export const useSolana = () => useContext(SolanaContext);
