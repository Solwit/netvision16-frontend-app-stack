(function () {
  'use strict';

  define([
    'angular',
    'ui-router',
    'netvisionApp.main',
    'netvisionApp.todo'
  ], function (angular) {
    var app = angular.module('netvisionApp', [
      'ui.router',
      'netvisionApp.main',
      'netvisionApp.todo'
    ]);

    return app;
  });

})();
