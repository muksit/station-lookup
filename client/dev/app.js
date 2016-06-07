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