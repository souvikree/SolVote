// src/models/pollModel.js

const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Poll question is required'],
    trim: true,
  },
  options: {
    type: [optionSchema],
    validate: {
      validator: function (arr) {
        return arr.length >= 2;
      },
      message: 'A poll must have at least two options',
    },
    required: true,
  },
  creatorWalletAddress: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: false,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

pollSchema.methods.closePoll = function () {
  this.isActive = false;
  this.endDate = Date.now();
  return this.save();
};

pollSchema.statics.findActivePolls = function () {
  return this.find({ isActive: true });
};

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
