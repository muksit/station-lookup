angular.module('space-station-tracking.locationService', [])
.factory('locationService', ['$resource', function($resource){
	var service = $resource('/api/station/locations/:id', {id: '@id'});
	return service;
}]);