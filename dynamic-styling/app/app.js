(function () {
  'use strict';

  angular
    .module('app', ['styling'])
    .controller('AppController', [
      '$scope',
      'StylesService',
      AppController
    ]);

  function AppController($scope, StylesService) {
    $scope.render = function (name, obj) {
      StylesService.render(name, obj);
    };
    $scope.toggle = function (name) {
      StylesService.toggle(name);
    };
    $scope.clear = function (name) {
      StylesService.clear(name);
    };

    ['colours', 'anim'].forEach(function (item) {
      $scope.$watch(
        function () { 
          return [item, $scope[item]];
        }, 
        function (newValue) {
          if ($scope.auto){
            $scope.render(newValue[0], newValue[1]);
          }
        }, 
        true
      );
    });
  }

})();
