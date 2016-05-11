/**
 * Grunt Configuration -- file is broken out into separate files for each grunt
 * task. These can be found in the grunt/ directory.
 *
 * Uses load-grunt-config, see https://github.com/firstandthird/load-grunt-config
 * for details.
 */
'use strict';

var deepExtend = require('deep-extend');
var loadGruntConfig = require('./grunt/load-grunt-config');

/*
 * Call Grunt configuration
 */
module.exports = function (grunt) {

    // Measure time of grunt tasks
    require('time-grunt')(grunt);

    /**
     * deepExtend will coerce all the
     * following stuff into one structure:
     *
     *   package.json
     *   grunt/build-tasks
     *   grunt/plugins
     *
     */
    var config = deepExtend({
            pkg: require('./package')
        },
        loadGruntConfig('grunt/build-tasks')
    );

    // Load project configuration
    grunt.initConfig(config);

    // Load all npm tasks through jit-grunt (all tasks from node_modules)
    require('jit-grunt')(grunt);

    /**
     * Tasks unique to the project
     */
    grunt.task.loadTasks('./grunt/tasks');

    /**
     * A task to generate pages
     */
    // Tasks for generating static pages
    grunt.registerTask('pages:dev', [
        'concat',
        'replace:dev',
        'clean:temp'
    ]);

    grunt.registerTask('pages:build', [
        'concat',
        'replace:build',
        'clean:temp'
    ]);

    /**
     * A task for development
     */
    grunt.registerTask('serve', ['connect:serve', 'watch']);

    grunt.registerTask('dev', [
        'jshint',
        'jscs',
        'pleeease:dev',
        'copy',
        'replace:htaccess',
        'browserify:dev',
        'pages:dev'
    ]);

    // Default task
    grunt.registerTask('default', ['dev']);

    /**
     * A task for building your pages
     */
    grunt.registerTask('build', [
        'jshint',
        'jscs',
        'modernizr:build',
        'pleeease:build',
        'imagemin',
        'copy',
        'replace:htaccess',
        'browserify:build',
        'karma:unit',
        'pages:build'
    ]);

    /**
     * Testing
     */
    // A task for testing development code
    grunt.registerTask('test', [
        'browserify:test',
        'karma:unit'
    ]);

    grunt.registerTask('test:all', [
        'karma:all'
    ]);

    /**
     * Travis CI task
     */
    grunt.registerTask('travis', [
        'jshint',
        'karma:travis'
    ]);

};
