// src/middleware/errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Log the full error stack for debugging
  
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Default to 500 if status is 200
    res.status(statusCode);
  
    res.json({
      message: err.message, // Provide a human-readable error message
      stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Hide stack trace in production
    });
  };
  
  module.exports = errorMiddleware;
  