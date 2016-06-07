;(function(ng) {
  'use strict';

  ng.module('space-station-tracking')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
