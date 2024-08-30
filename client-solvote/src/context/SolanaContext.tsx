"use client";
import * as anchor from '@coral-xyz/anchor'
import React, { createContext, useContext, ReactNode, useEffect, useState, useMemo } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Idl, Program } from '@coral-xyz/anchor';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { IDL } from '../idl/solvote_wallet';
import toast from 'react-hot-toast';

interface SolanaContextType {
  connection: Connection | null;
  program: Program<Idl> | null;
  loading: boolean;
  transactionPending: boolean;
}

const SolanaContext = createContext<SolanaContextType>({
  connection: null,
  program: null,
  loading: false,
  transactionPending: false,
});

export const SolanaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const [loading, setLoading] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);

  const program = useMemo(() => {
    if (connection && wallet) {
      try {
        const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
        const programId = new PublicKey("BK5UCcfueEnGzvWf7tnQ7izAGupynCNn8bLXHpR128vu");
        return new anchor.Program<Idl>(IDL, programId, provider);
      } catch (error) {
        console.error('Failed to create program:', error);
        toast.error('Failed to create program');
        return null;
      }
    } else {
      console.warn('Connection or wallet is not available');
      return null;
    }
  }, [connection, wallet]);

  const solanaContext = useMemo(() => ({
    connection,
    program,
    loading,
    transactionPending,
  }), [connection, program, loading, transactionPending]);

  useEffect(() => {
    if (!program) {
      console.error('Program not available');
    }
  }, [program]);

  return (
    <SolanaContext.Provider value={solanaContext}>
      {children}
    </SolanaContext.Provider>
  );
};

export const useSolana = () => useContext(SolanaContext);
