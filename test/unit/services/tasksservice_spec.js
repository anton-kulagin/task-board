describe('Unit: TaskService', function () {

    let service;

    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        // mock the service
        angular.mock.inject((TasksService) => {
            service = TasksService;
        });
    });

    it('should exist', function () {
        expect(service).toBeDefined();
    });
});
