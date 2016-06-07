;(function(ng) {
  'use strict';

  ng.module('space-station-tracking')
    .factory('StationResource', [
      '$resource',
      function($resource) {
        var _url = '/api/station/locations/:id';
        var _params = {};
        var _methods = {};

        return $resource(_url, _params, _methods);
      }
    ]);

}(window.angular));
