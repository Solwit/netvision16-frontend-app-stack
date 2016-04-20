(function () {
  'use strict';

  define([
    'angular'
  ], function (angular) {
    angular.module('netvisionApp.todo', [])
      .controller('TodoCtrl', function ($scope) {
        $scope.items = [
          { name: '1st task on the list', done: false },
          { name: '2nd task on the list', done: false },
          { name: '3rd task on the list', done: false }
        ];
        
        $scope.toggleDone = function (index) {
          $scope.items[index].done = !$scope.items[index].done;
        };
        
        $scope.addItem = function (name) {
          $scope.items.push({
            name: name,
            done: false
          });
        };
      });
  });
})();
