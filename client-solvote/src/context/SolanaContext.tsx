import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { AnchorProvider,  Program } from '@coral-xyz/anchor';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import {SolvoteWallet, IDL} from '../idl/solvote_wallet'; 
interface SolanaContextType {
  connection: Connection | null;
  program: Program<SolvoteWallet> | null;
}


const SolanaContext = createContext<SolanaContextType>({
  connection: null,
  program: null,
});

export const SolanaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const [solanaContext, setSolanaContext] = useState<SolanaContextType>({
    connection,
    program: null,
  });

  useEffect(() => {
    if (connection && wallet) {
      // Create the provider and set it
      const provider = new AnchorProvider(connection, wallet, {});

      // Define the Program ID and create the Program instance
      const programId = new PublicKey("BK5UCcfueEnGzvWf7tnQ7izAGupynCNn8bLXHpR128vu");
      const program = new Program<SolvoteWallet>(IDL, programId, provider);

      setSolanaContext({ connection, program });
    } else {
      console.error('Connection or wallet is not available');
    }
  }, [connection, wallet]);

  return (
    <SolanaContext.Provider value={solanaContext}>
      {children}
    </SolanaContext.Provider>
  );
};

export const useSolana = () => useContext(SolanaContext);
