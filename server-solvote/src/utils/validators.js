// src/utils/validators.js

const { body, param, validationResult } = require('express-validator');

// Validation for creating a poll
exports.createPollValidator = [
  body('question')
    .trim()
    .notEmpty()
    .withMessage('Question is required')
    .isLength({ max: 255 })
    .withMessage('Question cannot exceed 255 characters'),

  body('options')
    .isArray({ min: 2 })
    .withMessage('Options must be an array with at least two options')
    .custom(options => {
      if (options.some(option => !option.text || option.text.trim() === '')) {
        throw new Error('Each option must have a text value');
      }
      return true;
    }),

  body('endDate')
    .optional()
    .isISO8601()
    .withMessage('Invalid date format (ISO 8601)'),
];

// Validation for casting a vote
exports.castVoteValidator = [
  body('pollId')
    .isMongoId()
    .withMessage('Invalid Poll ID'),

  body('optionIndex')
    .isInt({ min: 0 })
    .withMessage('Option index must be a non-negative integer'),
];

// Validation for closing a poll
exports.closePollValidator = [
  param('id')
    .isMongoId()
    .withMessage('Invalid Poll ID'),
];

// Validation for updating poll options
exports.updatePollOptionsValidator = [
  param('id')
    .isMongoId()
    .withMessage('Invalid Poll ID'),

  body('options')
    .isArray({ min: 2 })
    .withMessage('Options must be an array with at least two options')
    .custom(options => {
      if (options.some(option => !option.text || option.text.trim() === '')) {
        throw new Error('Each option must have a text value');
      }
      return true;
    }),
];

// Middleware to check for validation errors
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
