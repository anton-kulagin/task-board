describe('Unit: TasksFilter', function () {

    let $filter;

    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        // mock the filter
        angular.mock.inject((_$filter_) => {
            $filter = _$filter_;
        });
    });

    it('should replace the word \'keyboard\' with \'leopard\'', function () {
        const testTasks = [
            {
                'id': 1,
                'text': 'test 1 2 3',
                'state': '2',
                'finishDate': '1/4/2017',
                'isArchived': true
            },
            {
                'id': 2,
                'text': 'test 2 23',
                'state': '5',
                'finishDate': '1/8/2017',
                'isArchived': false
            },
            {
                'id': 3,
                'text': 'test 1 32',
                'state': '3',
                'finishDate': '1/12/2017',
                'isArchived': false
            },
            {
                'id': 4,
                'text': 'test 1 32',
                'state': '3',
                'finishDate': '12/4/2017',
                'isArchived': true
            }
        ];
        const expectedValue = [
            {
                'id': 3,
                'text': 'test 1 32',
                'state': '3',
                'finishDate': '1/12/2017',
                'isArchived': false
            }
        ];
        const resultTasks = $filter('TasksFilter')(testTasks);

        expect(resultTasks).toEqual(expectedValue);
    });

});