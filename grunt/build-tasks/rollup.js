/**
 * Rollup Grunt Configuration
 */
'use strict';

var config = require('../config');
var babel = require('rollup-plugin-babel');

var devFiles = {};
var buildFiles = {};
var testFiles = {};

devFiles[config.js.dev.dest] = config.js.dev.entry;
buildFiles[config.js.build.dest] = config.js.dev.entry;
testFiles[config.js.test.dest] = config.js.test.entry;

module.exports = {
    options: {
        format: 'es6',

        plugins: [
            babel({
                presets: ['es2015-rollup'],
                exclude: '/node_modules/**'
            })
        ]
    }

/*    ,

    dev: {

    },

    build: {

    },

    test: {

    }
*/
};


