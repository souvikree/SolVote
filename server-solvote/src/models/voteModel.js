// src/models/voteModel.js

const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  pollId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll',
    required: true,
  },
  voterWalletAddress: {
    type: String,
    required: true,
  },
  optionIndex: {
    type: Number,
    required: true,
  },
  votedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true, 
});

voteSchema.index({ pollId: 1, voterWalletAddress: 1 }, { unique: true });

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
