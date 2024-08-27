// src/config/solana.js

const {
    Connection,
    clusterApiUrl,
    Keypair,
    PublicKey,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
  } = require('@solana/web3.js');
  const bs58 = require('bs58');
  require('dotenv').config(); // Load environment variables from .env file
  
  // Establish a connection to the Solana cluster
  const connection = new Connection(clusterApiUrl(process.env.SOLANA_NETWORK), 'confirmed');
  
  // Generate a new keypair (use this for testing purposes or as needed)
  const generateKeypair = () => {
    return Keypair.generate();
  };
  
  // Load a keypair from a base58-encoded secret key
  const loadKeypairFromSecret = (secretKey) => {
    const keypair = Keypair.fromSecretKey(bs58.decode(secretKey));
    return keypair;
  };
  
  // Function to send SOL from one account to another
  const sendSol = async (fromKeypair, toPublicKey, amount) => {
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: fromKeypair.publicKey,
          toPubkey: new PublicKey(toPublicKey),
          lamports: amount * 1e9, // Convert SOL to lamports
        })
      );
  
      const signature = await sendAndConfirmTransaction(connection, transaction, [fromKeypair]);
      console.log(`Transaction successful with signature: ${signature}`);
      return signature;
    } catch (error) {
      console.error(`Failed to send SOL: ${error.message}`);
      throw error;
    }
  };
  
  // Function to get the balance of a Solana account
  const getBalance = async (publicKey) => {
    try {
      const balance = await connection.getBalance(new PublicKey(publicKey));
      console.log(`Balance: ${balance / 1e9} SOL`); // Convert lamports to SOL
      return balance;
    } catch (error) {
      console.error(`Failed to get balance: ${error.message}`);
      throw error;
    }
  };
  
  // Function to get the latest blockhash (useful for creating transactions)
  const getLatestBlockhash = async () => {
    try {
      const { blockhash } = await connection.getLatestBlockhash();
      console.log(`Latest blockhash: ${blockhash}`);
      return blockhash;
    } catch (error) {
      console.error(`Failed to get latest blockhash: ${error.message}`);
      throw error;
    }
  };
  
  // Function to airdrop SOL (useful for testing on devnet)
  const airdropSol = async (publicKey, amount) => {
    try {
      const airdropSignature = await connection.requestAirdrop(
        new PublicKey(publicKey),
        amount * 1e9 // Convert SOL to lamports
      );
      await connection.confirmTransaction(airdropSignature);
      console.log(`Airdrop successful: ${airdropSignature}`);
      return airdropSignature;
    } catch (error) {
      console.error(`Failed to airdrop SOL: ${error.message}`);
      throw error;
    }
  };
  
  // Function to get transaction details by signature
  const getTransactionDetails = async (signature) => {
    try {
      const transactionDetails = await connection.getTransaction(signature);
      if (transactionDetails) {
        console.log('Transaction details:', transactionDetails);
        return transactionDetails;
      } else {
        console.log('Transaction not found');
        return null;
      }
    } catch (error) {
      console.error(`Failed to get transaction details: ${error.message}`);
      throw error;
    }
  };
  
  module.exports = {
    connection,
    generateKeypair,
    loadKeypairFromSecret,
    sendSol,
    getBalance,
    getLatestBlockhash,
    airdropSol,
    getTransactionDetails,
  };
  