'use strict';
var servicename = 'responsiveService';

module.exports = function(app) {

  var dependencies = ['$window', '$log'];

  function service($window, $log) {
    function returnRange() {
      $log.log('range');
    }

    function returnMin() {
      $log.log('min');
    }

    function returnMax() {
      $log.log('max');
    }
    var device = {
      type: returnRange,
      min: returnMin,
      max: returnMax
    }

    return device

  }
  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};