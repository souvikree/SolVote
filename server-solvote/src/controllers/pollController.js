// src/controllers/pollController.js

const Poll = require('../models/pollModel');
const Vote = require('../models/voteModel');
const { generateUniqueId, formatDate, isDateInPast } = require('../utils/helpers');
const { validateCreatePoll, validateUpdatePollOptions } = require('../utils/validators');

// Create a new poll
exports.createPoll = async (req, res) => {
  try {
    const { question, options, endDate } = req.body;
    const { walletAddress } = req.user; // Assuming wallet address is added by authMiddleware

    // Validate input
    const { error } = validateCreatePoll(req.body);
    if (error) return res.status(400).json({ message: error.message });

    // Validate endDate
    if (endDate && isDateInPast(endDate)) {
      return res.status(400).json({ message: 'End date must be in the future' });
    }

    const poll = new Poll({
      _id: generateUniqueId(),
      question,
      options,
      creatorWalletAddress: walletAddress,
      endDate: endDate ? formatDate(endDate) : null,
      isActive: true,
    });

    await poll.save();
    res.status(201).json(poll);
  } catch (err) {
    console.error('Error creating poll:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all active polls
exports.getAllActivePolls = async (req, res) => {
  try {
    const polls = await Poll.findActivePolls();
    res.status(200).json(polls);
  } catch (err) {
    console.error('Error retrieving active polls:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single poll by ID
exports.getPollById = async (req, res) => {
  try {
    const { id } = req.params;
    const poll = await Poll.findById(id);

    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }

    res.status(200).json(poll);
  } catch (err) {
    console.error('Error retrieving poll:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Close a poll by ID
exports.closePoll = async (req, res) => {
  try {
    const { id } = req.params;
    const poll = await Poll.findById(id);

    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }

    if (poll.creatorWalletAddress !== req.user.walletAddress) {
      return res.status(403).json({ message: 'Not authorized to close this poll' });
    }

    await poll.closePoll();
    res.status(200).json({ message: 'Poll closed successfully' });
  } catch (err) {
    console.error('Error closing poll:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update poll options (e.g., add or remove options)
exports.updatePollOptions = async (req, res) => {
  try {
    const { id } = req.params;
    const { options } = req.body;

    // Validate input
    const { error } = validateUpdatePollOptions(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const poll = await Poll.findById(id);

    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }

    if (poll.creatorWalletAddress !== req.user.walletAddress) {
      return res.status(403).json({ message: 'Not authorized to update this poll' });
    }

    poll.options = options;
    await poll.save();
    res.status(200).json(poll);
  } catch (err) {
    console.error('Error updating poll options:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
