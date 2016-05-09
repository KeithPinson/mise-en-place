/**
 * Bean Event Manager
 */
'use strict';

var config = require('../config');

module.exports = {
    build: {
        devFile: config.bean.dev,
        outputFile: config.bean.dest

/*        
        extra: {
            shiv: true,
            mq: true
        },

        // Minify
        uglify: true,

        // Files from configuration
        files: {
            src: config.js.files.concat(config.css.files)
        }
*/        
    }
};
