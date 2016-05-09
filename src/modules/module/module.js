/**
 * An example module
 */

import fire from '../../../node_modules/bean/bean.min.js';

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

        // Fire an event on initialisation
        init () {
            // //            $(document).trigger(_eventName);
            fire(document,_eventName);
        }
    };
}
