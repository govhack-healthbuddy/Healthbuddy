
  angular.module('HealthBuddyApp.controllers').controller('demoController', function ($scope, healthService, $location) {
  $scope.Context = [];

  $scope.init = function() {
  };

  $scope.navigateNext = function() {
    $location.url("/results/");
  }

});
