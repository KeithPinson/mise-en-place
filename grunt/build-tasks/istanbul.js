/**
 * Istanbul Grunt Configuration
 */
'use strict';

var config = require('../config');


module.exports = {

// TODO
    env: {
        coverage: {
            APP_DIR_FOR_CODE_COVERAGE: '../test/coverage/instrument/app/'
        }
    },
    instrument: {
        files: 'app/*.js',
        options: {
            lazy: true,
            basePath: 'test/coverage/instrument/'
        }
    },
    mochaTest: {
        options: {
            reporter: 'spec'
        },
        src: ['test/*.js']
    },
    storeCoverage: {
        options: {
            dir: 'test/coverage/reports'
        }
    },
    makeReport: {
        src: 'test/coverage/reports/**/*.json',
        options: {
            type: 'lcov',
            dir: 'test/coverage/reports',
            print: 'detail'
        }
    }

};
