// src/controllers/resultController.js

const Poll = require('../models/pollModel');

// Get results for a specific poll
exports.getPollResults = async (req, res) => {
  try {
    const { pollId } = req.params;

    // Validate input
    if (!pollId) {
      return res.status(400).json({ message: 'Poll ID is required' });
    }

    // Retrieve the poll
    const poll = await Poll.findById(pollId);

    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }

    // Check if the poll is active or ended
    if (poll.isActive) {
      return res.status(200).json({
        message: 'Poll is still active',
        data: {
          question: poll.question,
          options: poll.options,
        },
      });
    }

    // Poll is ended, return results with vote counts
    res.status(200).json({
      question: poll.question,
      options: poll.options.map(option => ({
        text: option.text,
        votes: option.votes,
      })),
      totalVotes: poll.options.reduce((total, option) => total + option.votes, 0),
    });
  } catch (err) {
    console.error('Error retrieving poll results:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
