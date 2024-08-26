// src/config/jwt.js

const jwt = require('jsonwebtoken');
require('dotenv').config(); 

// Function to generate a JWT token
const generateToken = (user) => {
  // Create a payload with user information (e.g., user ID)
  const payload = {
    id: user._id, // Adjust this based on your user schema
    email: user.email // Adjust this based on your user schema
  };

  
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); 
};

// Function to verify a JWT token
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(err); 
      } else {
        resolve(decoded); 
      }
    });
  });
};

module.exports = {
  generateToken,
  verifyToken
};
