import { Connection, PublicKey } from '@solana/web3.js';
// import { Program, Provider } from '@coral-xyz/anchor';
import idl from '../idl/solvote_wallet.json'; // Path to your IDL file
import { Program,  AnchorProvider } from '@coral-xyz/anchor';



const connection = new Connection('http://localhost:8899', 'confirmed'); // Solana localnet

const programID = new PublicKey(idl.metadata.address); // Replace with your program ID
const provider = new AnchorProvider(connection, window.solana, { preflightCommitment: 'processed' });

const program = new Program(idl, programID, provider);

export { connection, program };
