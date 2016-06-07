'use strict';

angular.module('space-station-tracking.main', [
  'space-station-tracking.locationService'
  ])
.config(function($stateProvider){
  $stateProvider.state('main', {
    url: '/',
    pageTitle: 'Main',
    controller: 'StationController as station',
    templateUrl: 'app/templates/station.html',
    resolve: {
      data: function($q, locationService)
      {
        return $q.all({
          favoritesList: locationService.query().$promise
        });
      }
    }
  });
})
.controller('StationController', function($scope, $filter, $http, data, 
  locationService){

  var vm = this;
  var service = locationService;

  _.extend(vm, {

    nextTimes : [],

    locations: data.favoritesList,

    getAllLocations: function(){
      vm.locations = service.query();
    },

    getNextPass: function(location){
      var config = {};
      config.method = 'GET';
      config.url = 'api/station/nextPass/' + $filter('number')(location.latitude, 1) +
      '/' + $filter('number')(location.longitude, 1);

      $http(config).then(function(response){
        if (response.status !== 200){
          vm.error = 'Sorry, your request could not be processed';
        } else {
          vm.error = '';
          vm.nextTimes = response.data.response;
        }
      }, function(error){
        console.log(error);
      });

    },

    createLocation: function(data){
      console.log(data);
      service.save(data)
        .$promise.then(function(resp){
          vm.newLocation = {};
          vm.refresh();
        }, function(error){
          console.log(error);
        });
    },

    refresh: function(){
      vm.locations = service.query();
    }

  });
});
