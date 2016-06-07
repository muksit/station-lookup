var stationTracking = angular.module('space-station-tracking', [
	'ngResource',
	'ngMessages',
	'ui.router',
	'mgcrea.ngStrap',
  'space-station-tracking.main'
]);

stationTracking.config(function($urlRouterProvider){
	$urlRouterProvider.otherwise('/');
});

/*;(function(ng) {
  'use strict';

  ng.module('space-station-tracking', [
      'ngResource',
      'ngRoute',
      'ngMessages',
      'ui-router',
      'mgcrea.ngStrap'
    ]);
}(window.angular));
*/