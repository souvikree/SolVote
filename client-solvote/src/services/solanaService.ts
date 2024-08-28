// import idl from '../idl/solvote_wallet'; // Import IDL
// import { Connection, PublicKey } from '@solana/web3.js';
// import { Program, AnchorProvider, Idl, setProvider } from '@coral-xyz/anchor';

// let program: Program | null = null;
// let connection: Connection | null = null;

// if (typeof window !== 'undefined' && window.solana?.isPhantom) { // Check if Phantom wallet is installed
//   connection = new Connection('http://localhost:8899', 'confirmed'); // Solana localnet
//   const provider = new AnchorProvider(connection, window.solana, { preflightCommitment: 'processed' });
//   setProvider(provider);
  
//   const programID = new PublicKey("BK5UCcfueEnGzvWf7tnQ7izAGupynCNn8bLXHpR128vu");
//   program = new Program(idl as Idl, programID);
// } else {
//   console.error('Phantom wallet is not available or window.solana is not defined');
// }

// export { program, connection };
