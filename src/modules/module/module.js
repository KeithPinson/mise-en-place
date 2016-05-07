/**
 * An example module
 */

import '../../../node_modules/bean/bean.min.js';

// Public API
export default function () {

    // Strict mode to prevent sloppy JS
    'use strict';

    // Private variables
    let _eventName = '_test';

    return {

        // Getter for private variable
        getEventName () {
            return _eventName;
        },

        // File an event on initialisation
        init () {
//            $(document).trigger(_eventName);
//            bean.fire(document,_eventName);
        }
    };
}
