// src/controllers/voteController.js

const Poll = require('../models/pollModel');
const Vote = require('../models/voteModel');
const { validateCastVote } = require('../utils/validators');

// Cast a vote
exports.castVote = async (req, res) => {
  try {
    const { pollId, optionIndex } = req.body;
    const { walletAddress } = req.user; // Assuming wallet address is added by authMiddleware

    // Validate input
    const { error } = validateCastVote(req.body);
    if (error) return res.status(400).json({ message: error.message });

    // Find the poll
    const poll = await Poll.findById(pollId);
    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }

    // Check if the option index is valid
    if (optionIndex < 0 || optionIndex >= poll.options.length) {
      return res.status(400).json({ message: 'Invalid option index' });
    }

    // Check if the user has already voted in this poll
    const existingVote = await Vote.findOne({ pollId, voterWalletAddress: walletAddress });
    if (existingVote) {
      return res.status(400).json({ message: 'You have already voted in this poll' });
    }

    // Create a new vote
    const vote = new Vote({
      pollId,
      voterWalletAddress: walletAddress,
      optionIndex,
    });

    await vote.save();

    // Increment the vote count for the selected option
    poll.options[optionIndex].votes += 1;
    await poll.save();

    res.status(201).json({ message: 'Vote cast successfully' });
  } catch (err) {
    console.error('Error casting vote:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get votes for a specific poll
exports.getVotesForPoll = async (req, res) => {
  try {
    const { pollId } = req.params;

    // Validate input
    if (!pollId) {
      return res.status(400).json({ message: 'Poll ID is required' });
    }

    // Retrieve the votes for the specified poll
    const votes = await Vote.find({ pollId }).populate('pollId', 'question options');
    res.status(200).json(votes);
  } catch (err) {
    console.error('Error retrieving votes:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Check if a user has voted on a specific poll
exports.checkIfVoted = async (req, res) => {
  try {
    const { pollId } = req.params;
    const { walletAddress } = req.user; // Assuming wallet address is added by authMiddleware

    // Validate input
    if (!pollId) {
      return res.status(400).json({ message: 'Poll ID is required' });
    }

    // Check if the user has voted in the specified poll
    const vote = await Vote.findOne({ pollId, voterWalletAddress: walletAddress });
    const hasVoted = !!vote;

    res.status(200).json({ hasVoted });
  } catch (err) {
    console.error('Error checking vote status:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
