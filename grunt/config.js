/**
 * Grunt configuration
 */
'use strict';

module.exports = {

    srcDir: 'src/',
    destDir: 'dist/',

    // JavaScript files
    js: {
        files: [
            'src/js/**/*.js'
        ],

        // All files that should be checked with JSHint
        hintFiles: [
            'Gruntfile.js',
            'src/**/*.js',
            '!src/dist/**/*.js',
            'test/*.js'
        ],

        dev: {
            entry: 'src/js/main.spec.js',
            dest: 'src/dist/index.js'
        },
        build: {
            entry: 'src/js/main.spec.js',
            dest: 'dist/<%= pkg.version %>/main.min.js'
        },
        test: {
            entry: 'test/main.spec.js',
            dest: 'test/dist/test.js'
        },
        libs: [
//            'node_modules/grunt-modernizr/lib/modernizr-dev.js'
        ]
    },

    // CSS files
    css: {
        files: [
            'src/css/**/*.css'
        ],
        src: 'src/css/main.css',
        devDest: 'src/dist/main.css',
        dest: 'dist/<%= pkg.version %>/main.min.css'
    },

    // Modernizr files
    modernizr: {
        dev: 'node_modules/grunt-modernizr/lib/modernizr-dev.js',
        devDest: 'dist/js/modernizr.js',
        dest: 'dist/<%= pkg.version %>/modernizr.min.js'
    },

    bean: {
        dev: 'node_modules/bean/bean.js',
        devDest: 'dist/js/bean.js',
        dest: 'dist<%= pkg.version %>/bean.min.js'
    },

    // Images
    img: {
        src: 'src/img/',
        dest: 'dist/img/'
    },

    // Apache Server Configs
    htaccess: {
        src: 'node_modules/apache-server-configs/dist/.htaccess',
        dest: 'dist/.htaccess'
    },

    tests: {
        specs: [
            'test/js/**/*spec.js'
        ],
        coverage: 'test/coverage/'
    },

    // Versioned references
    replace: {
        build: {
            src: 'temp/**/*.html',
            dest: 'dist/',
            bean: '<%= pkg.version %>/bean.min.js',
            maincss: '<%= pkg.version %>/main.min.css',
            modernizr: '<%= pkg.version %>/modernizr.min.js',
            mainjs: '<script src="<%= pkg.version %>/main.min.js"></script>'
        },

        dev: {
            src: 'temp/**/*.html',
            dest: 'src/',
            bean: '../node_modules/bean/bean.js',
            maincss: 'dist/main.css',
            modernizr: '../node_modules/grunt-modernizr/lib/modernizr-dev.js',
            mainjs: '<script src="dist/index.js"></script>'
        }
    }
};
