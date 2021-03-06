/**
 * JSHint taks configuration
 */
'use strict';

var config = require('../config');

module.exports = {

  // All files from config
  all: config.js.hintFiles,

  options: {

    // Add JSHintRC file with options
    jshintrc: '.jshintrc'
  }
};
