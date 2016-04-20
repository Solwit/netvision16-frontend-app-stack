(function () {
  'use strict';

  define([
    'netvisionApp.todo',
    'ng-mocks'
  ], function () {
    describe('Controller: TodoCtrl', function () {

      // load the controller's module
      beforeEach(module('netvisionApp.todo'));

      var TodoCtrl,
        scope;

      // Initialize the controller and a mock scope
      beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TodoCtrl = $controller('TodoCtrl', {
          $scope: scope
        });
      }));

      it('should start with list of 3 items attached to the scope', function () {
        expect(scope.items).toEqual([
          { name: '1st task on the list', done: false },
          { name: '2nd task on the list', done: false },
          { name: '3rd task on the list', done: false }
        ]);
      });


      describe('toggle done state', function () {
        it('should mark task as done', function () {
          scope.toggleDone(1);

          expect(scope.items[1].done).toBe(true);
        })
      });
    });
  })
})();
