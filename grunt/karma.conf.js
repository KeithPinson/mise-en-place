/**
 * Default configuration for Karma
 */
'use strict';

// Get configuration of project to get correct files to include
var projectConfig = require('./config');

/**
 * Get all files to include in Karma tests
 * @return {Array} Array of all files to include
 */
var getIncludeFiles = function () {
  var files = [];

  // Add JavaScript libs
  var filePatterns = projectConfig.js.libs;

  // Add tests
  filePatterns.push(projectConfig.js.test.dest);

  // Iterate through files
  filePatterns.forEach(function (element) {
    files.push({
      pattern: element,
      included: true
    });
  });

  return files;
};

/**
 * Exports as Karma configuration
 */
module.exports = function (config) {
    config.set({
        basePath: '../',

        logLevel: config.LOG_INFO,

        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity,

        colors: true,
        captureTimeout: 7000,

        frameworks: ['mocha', 'sinon-chai', 'browserify'],
        reporters: ['mocha', 'coverage'],

        plugins: [
          'karma-mocha',
          'karma-chrome-launcher',
          'karma-firefox-launcher',
          'karma-safari-launcher',
          'karma-phantomjs-launcher'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
          'src/**/*.js': ['browserify'],
          'test/**/*.spec.js': ['browserify']
        },

        // Browserify configuration
        // The coverage command goes here instead of the preprocessor because we need it to work with browserify
        browserify: {
          debug: true,
          transform: [
              [
                  'babelify',
                  {
                      presets: 'es2015'
                  }
              ], [
                  'browserify-istanbul',
                  {
                      instrumenterConfig: {
                          embedSource: true
                      }
                  }
              ]
          ]
        },

        // optionally, configure the reporter
        // text displays it within the console (alternative: text-summary)
        // lcov creates a codecov compatible report
        coverageReporter: {
          reporters: [
              {'type': 'text'},
              {'type': 'html', dir: 'coverage'},
              {'type': 'lcov'}
          ]
        },

        // List of files to load in the browser
        files: getIncludeFiles()
    });
};

