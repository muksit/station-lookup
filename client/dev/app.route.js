;(function(ng) {
  'use strict';

  ng.module('space-station-tracking')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'app/templates/station.html',
            controller: 'StationController',
            controllerAs: 'station'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
