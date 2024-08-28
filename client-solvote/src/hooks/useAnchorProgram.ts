// import { useMemo } from 'react';
// import { Program, AnchorProvider, Idl } from '@coral-xyz/anchor';
// import idl from '../idl/solvote_wallet.json'; // Path to your IDL file
// import { Connection, PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js';
// import { useWallet } from '@solana/wallet-adapter-react';

// // Define your Solana network and program ID

// export const useAnchorProgram = () => {
//     const network = 'http://localhost:8899'; // Your Solana RPC endpoint
//     const programID = new PublicKey(idl.metadata.address); // Replace with your program's public key
//     const { publicKey, signTransaction, signAllTransactions } = useWallet();
//     const connection = useMemo(() => new Connection(network), []);

//     const provider = useMemo(() => {
//         if (!publicKey || !signTransaction || !signAllTransactions) return null;

//         // Correctly define the functions for handling transactions
//         const signTransactionFn = <T extends Transaction | VersionedTransaction>(transaction: T) =>
//             signTransaction(transaction as Transaction) as Promise<T>;

//         const signAllTransactionsFn = <T extends Transaction | VersionedTransaction>(transactions: T[]) =>
//             signAllTransactions(transactions as Transaction[]) as Promise<T[]>;

//         return new AnchorProvider(
//             connection,
//             {
//                 publicKey,
//                 signTransaction: signTransactionFn,
//                 signAllTransactions: signAllTransactionsFn,
//             },
//             { preflightCommitment: 'processed' }
//         );
//     }, [publicKey, signTransaction, signAllTransactions, connection]);

//     const program = useMemo(() => {
//         if (!provider) return null;

//         // Correctly instantiate the Program with the proper parameters
//         return new Program(idl, programID, provider);
//     }, [provider]);

//     return program;
// };
