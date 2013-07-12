'use strict';

angular.module('538134App')
  .controller('ServicesCtrl', function ($scope) {
       $scope.servicesInfo = "Some services we provide will be listed here.";
        $scope.isCollapsed = false;
        
        $scope.items = [
            "The first choice!",
            "And another choice for you.",
            "but wait! A third!"
          ];
  });
