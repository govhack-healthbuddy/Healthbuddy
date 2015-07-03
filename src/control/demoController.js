
  angular.module('HealthBuddyApp.controllers').controller('demoController', function ($scope, healthService, $location) {
  $scope.Context = [];

  $scope.init = function() {
    $scope.getData();
  };

  $scope.getData = function() {
    healthService.getData()
      .then(function(response) {
          $scope.updateModel(response.data);
      });
  }

});
