// src/config/db.js

const mongoose = require('mongoose');
require('dotenv').config(); 

const connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); 
  }
};

module.exports = connectDB;
