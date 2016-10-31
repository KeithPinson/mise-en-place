/**
 * Configuration for Karma
 */
'use strict';

// Get configuration of project to get correct files to include
var projectConfig = require('./config');

const buble = require('rollup-plugin-buble');
const istanbul = require('rollup-plugin-istanbul');


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
    const configuration = {
        basePath: '../',

        // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        autoWatch: false, // Trigger a test when a file changes
        colors: true,

        frameworks: ['sinon', 'chai', 'mocha'],

        reporters: ['progress', 'mocha', 'coverage'],


        browsers: ['Chrome'],
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 2,
        concurrency: 4,  // Max number of concurrent browsers (default: Infinity)
        captureTimeout: 9000,   // Karma will attempt (3) times (default: 60000)
        browserNoActivityTimeout: 30000,

        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['rollup'],
            'test/**/*.spec.js': ['rollup']
        },
        rollupPreprocessor: {
            rollup: {
                plugins: [
                    buble({
                        exclude: 'node_modules/**'
                    }),
                    istanbul({
                        exclude: ['test/**/*.js']
                    })
                ]
            },
            bundle: {
                intro: '(function() {',
                outro: '})();',
                sourceMap: 'false'
            }
        },

        coverageReporter: {
            reporters: [
                {type: 'text', dir: '../../coverage'},
                {type: 'html', dir: '../../coverage'},
                {type: 'lcov'}
            ]
        },

        // List of files to load in the browser
        files: getIncludeFiles(),

        // For CI set to true
        singleRun: true
    };

    config.set(configuration);
};

