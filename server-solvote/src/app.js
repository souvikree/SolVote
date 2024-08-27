// src/app.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

// Import routes
const pollRoutes = require('./routes/pollRoutes');
const resultRoutes = require('./routes/resultRoutes');
const voteRoutes = require('./routes/voteRoutes');

// Import middleware
const errorMiddleware = require('./middleware/errorMiddleware');
const authMiddleware = require('./middleware/authMiddleware'); 

// Create the Express application
const app = express();

// CORS options configuration
const corsOptions = {
  origin: '*', 
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
};

// Apply middlewares
app.use(cors(corsOptions));
app.use(helmet()); 
app.use(morgan('combined')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Use routes
app.use('/api', pollRoutes);
app.use('/api', resultRoutes);
app.use('/api', voteRoutes);


app.use(errorMiddleware);


module.exports = app;
