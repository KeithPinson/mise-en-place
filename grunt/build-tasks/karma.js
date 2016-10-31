/**
 * Configuration for Karma test-runner
 */
'use strict';

module.exports = {
  options: {
    configFile: 'grunt/karma.conf.js'
  },

  // Testing in all browsers
  all: {
    options: {

      // Start these browsers
      browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS']
    }
  },

  // PhantomJS
  unit: {
    options: {
      browsers: ['PhantomJS']
    }
  },

  // Jenkins
  jenkins: {
    configFile: 'grunt/karma.conf.js',
    singleRun: true,
    runnerPort: 9999,
    browsers: ['PhantomJS']
  }
};
