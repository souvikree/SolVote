// import { Program, AnchorProvider, Idl } from '@coral-xyz/anchor';
// import idl from '../idl/solvote_wallet.json'; // Ensure the path is correct
// import { Connection, PublicKey } from '@solana/web3.js';
// import { useWallet } from '@solana/wallet-adapter-react';


// export const useSolanaProgram = () => {
//     const network = 'http://localhost:8899'; // or the network you are using
//     const programID = new PublicKey('BK5UCcfueEnGzvWf7tnQ7izAGupynCNn8bLXHpR128vu'); // Replace with your program's public key
//     const wallet = useWallet();
//     const connection = new Connection(network);

//     // Ensure IDL is cast correctly
  

//     // Create the provider correctly
//     const provider = new AnchorProvider(connection, wallet as any, {});

//     // Initialize the program with the provider
//     const program = new Program(idl, programID, provider);

//     return { program };
// };
