/**
 * An example specification for the sample module.
 *
 * Loads the module and runs the test suite.
 *
 * Note: Module path is relative to the current path
 */
import Module from './sample.js';

export default function () {
  'use strict';

  var module = new Module();

  // Test suite sample
  describe('Sample', function () {

    it('is available', function () {
      expect(module).not.toBe(null);
    });

    it('has getter for event name', function () {
      expect(module.getEventName()).toBe('_test');
    });

    it('fires event on init', function () {
      var eventCalled;

      $(document).on(module.getEventName(), function () {
        eventCalled = true;
      });

      module.init();

      expect(eventCalled).toBeTruthy();
    });
  });
}
