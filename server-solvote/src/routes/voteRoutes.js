// src/routes/voteRoutes.js

const express = require('express');
const {
  castVote,
  getVotesForPoll,
  checkIfVoted
} = require('../controllers/voteController');

const authMiddleware = require('../middleware/authMiddleware');
const { castVoteValidator } = require('../utils/validators');

const router = express.Router();

router.post('/votes', authMiddleware, castVoteValidator, castVote);
router.get('/votes/:pollId', getVotesForPoll);
router.get('/votes/:pollId/status', authMiddleware, checkIfVoted);

module.exports = router;
