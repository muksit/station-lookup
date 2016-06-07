;(function(ng) {
  'use strict';

  ng.module('space-station-tracking')
    .factory('StataionDAO', [
      '$q',
      'Station',
      'StationResource',
      function($q, Station, StationResource) {}
    ]);

}(window.angular));
