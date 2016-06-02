// jshint camelcase: false
/* jshint -W031 */

// Include your specs here
import ModuleSpec from '/test/js/example/example.spec.js';

(function () {
    'use strict';

    // Make async
    window.__karma__.loaded = function () {
    };

    // Set the flag for test environment
    window.__test = true;

    // Execute new specs here
    new ModuleSpec();

    window.__karma__.start();
}());
