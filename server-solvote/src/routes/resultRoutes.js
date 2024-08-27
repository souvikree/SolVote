// src/routes/resultRoutes.js

const express = require('express');
const { getPollResults } = require('../controllers/resultController');

const router = express.Router();

router.get('/results/:pollId', getPollResults);

module.exports = router;
