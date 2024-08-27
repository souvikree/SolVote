// src/routes/pollRoutes.js

const express = require('express');
const {
  createPoll,
  getAllActivePolls,
  getPollById,
  closePoll,
  updatePollOptions
} = require('../controllers/pollController');
const { createPollValidator, updatePollOptionsValidator } = require('../utils/validators');
const authMiddleware = require('../middleware/authMiddleware');



const router = express.Router();

router.post('/polls', authMiddleware, createPollValidator, createPoll);
router.get('/polls', getAllActivePolls);
router.get('/polls/:id', getPollById);
router.patch('/polls/:id/close', authMiddleware, closePoll);
router.patch('/polls/:id/options', authMiddleware, updatePollOptionsValidator, updatePollOptions);

module.exports = router;
