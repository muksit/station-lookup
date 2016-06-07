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
.controller('StationController', function($scope, $http, data, locationService){
  /*$http.get('api/station/locations')
    .success(function(data){
      $scope.expenses = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });*/


  var vm = this;
  var service = locationService;

  _.extend(vm, {

    locations: data.favoritesList,

    getAllLocations: function(){
      vm.locations = service.query();
      console.log(vm.locations);
    },

    getNextPasses: function(){
      //query the api to get next pass for a certain place
    },

    createLocation: function(data){
      service.save(data)
        .$promise.then(function(resp){
          console.log('resp is ' + resp);
          vm.newLocation = {};
          vm.refresh();
        }, function(error){
          console.log('error is ' + error);
        });
    },

    refresh: function(){
      vm.locations = service.query();
    }

  });
});
