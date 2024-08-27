// src/utils/helpers.js

const crypto = require('crypto');
const moment = require('moment');

/**
 * Generate a unique ID using UUID v4
 * @returns {string} Unique identifier
 */
exports.generateUniqueId = () => {
  return crypto.randomUUID();
};

/**
 * Format a date in ISO 8601 format
 * @param {Date|string} date - The date to format
 * @returns {string} Formatted date
 */
exports.formatDate = (date) => {
  return moment(date).toISOString();
};

/**
 * Check if a date is in the past
 * @param {Date|string} date - The date to check
 * @returns {boolean} True if the date is in the past, otherwise false
 */
exports.isDateInPast = (date) => {
  return moment(date).isBefore(moment());
};

/**
 * Convert an array of objects to a map with specified key
 * @param {Array} array - The array to convert
 * @param {string} key - The key to use as the map key
 * @returns {Object} Map of objects
 */
exports.arrayToMap = (array, key) => {
  return array.reduce((map, item) => {
    map[item[key]] = item;
    return map;
  }, {});
};

/**
 * Check if an email is valid
 * @param {string} email - The email to check
 * @returns {boolean} True if the email is valid, otherwise false
 */
exports.isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Generate a random integer between min (inclusive) and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
exports.getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Deep clone an object
 * @param {Object} obj - The object to clone
 * @returns {Object} Deep cloned object
 */
exports.deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
