/**
 * File versioning in build process
 */
'use strict';

var config = require('../config');

module.exports = {
    build: {
        options: {
            patterns: [
                {
                    match: 'bean',
                    replacement: config.replace.build.bean
                },{
                    match: 'maincss',
                    replacement: config.replace.build.maincss
                },{
                    match: 'mainjs',
                    replacement: config.replace.build.mainjs
                },{
                    match: 'modernizr',
                    replacement: config.replace.build.modernizr
                }
            ]
        },

        files: [{
            expand: true,
            flatten: true,
            src: config.replace.build.src,
            dest: config.replace.build.dest
        }]
    },

    dev: {
        options: {
            patterns: [{
                match: 'bean',
                replacement: config.replace.dev.bean
            }, {
                match: 'maincss',
                replacement: config.replace.dev.maincss
            }, {
                match: 'mainjs',
                replacement: config.replace.dev.mainjs
            }, {
                match: 'modernizr',
                replacement: config.replace.dev.modernizr
            }]
        },

        files: [{
            expand: true,
            flatten: true,
            src: config.replace.dev.src,
            dest: config.replace.dev.dest
        }]
    },

    // The following will copy the `.htaccess` file provided by the
    // Apache Server Configs project in the specified `dest` directory,
    // but will also uncomment the `ErrorDocument 404 /404.html` line
    // so that Apache will serve the custom `404.html` page in case of
    // a 404 error.
    htaccess: {
        options: {
            patterns: [{
                match: /# ErrorDocument/g,
                replacement: function () {
                    return 'ErrorDocument';
                }
            }]
        },
        files: [{
            src: config.htaccess.src,
            dest: config.htaccess.dest
        }]
    }
};
