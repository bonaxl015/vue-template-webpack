const { merge } = require('webpack-merge');
const base = require('./base');
const development = require('./development');
const production = require('./production');

exports.createProductionConfig = (options = {}) => {
  return merge(base, production(options));
};

exports.createDevelopmentConfig = (options = {}) => {
  return merge(base, development(options));
};

module.exports = exports;
