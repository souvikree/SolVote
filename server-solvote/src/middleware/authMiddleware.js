// src/middleware/authMiddleware.js

const { Connection, PublicKey } = require('@solana/web3.js');
const { loadKeypairFromSecret } = require('../config/solana');

const authMiddleware = async (req, res, next) => {
  try {
    // Extract the wallet address from request headers
    const walletAddress = req.headers['x-wallet-address'];

    if (!walletAddress) {
      return res.status(401).json({ message: 'Wallet not connected' });
    }

    // Validate the wallet address
    const isValidAddress = PublicKey.isOnCurve(new PublicKey(walletAddress));
    if (!isValidAddress) {
      return res.status(400).json({ message: 'Invalid wallet address' });
    }

    // Optional: Validate the connection to the Solana network
    const connection = new Connection(process.env.SOLANA_RPC_URL);
    const accountInfo = await connection.getAccountInfo(new PublicKey(walletAddress));

    if (!accountInfo) {
      return res.status(404).json({ message: 'Wallet not found on the Solana network' });
    }

    // Attach the wallet address to the request object for further use
    req.user = { walletAddress };

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error(`Auth middleware error: ${error.message}`);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = authMiddleware;
