describe('Unit: BoardCtrl', function() {

  let ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(($controller,$rootScope,TasksService) => {
      var scope = $rootScope.$new();
      // ctrl = $controller('BoardCtrl');
      ctrl = $controller('BoardCtrl', {
        TasksService: TasksService,
        $scope: scope
      });
    });

  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

});