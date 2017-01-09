function BoardCtrl($scope, TasksService) {
    'ngInject';

    const vm = this;
    $scope.tasks = TasksService.tasks;

    vm.modalToogle = ()=> {
        vm.modal.show = !vm.modal.show;
    };

    vm.updateTask = (scope)=> {
        vm.modal.selectedTask = scope.task;
        vm.modalToogle();
    };

    vm.archivedTask = (scope)=> {
        scope.task.isArchived = true;
    };

    vm.modal = {
        show: false,
        selectedTask: {}
    };

    vm.addTask = ()=> {
        let newTask = {
            id: $scope.tasks.length + 2,
            text: '',
            state: 1,
            finishDate: '',
            isArchived: false
        };
        $scope.tasks.push(newTask);
        vm.modal.selectedTask = $scope.tasks[$scope.tasks.length - 1];
        vm.modalToogle();
    };

    //auto change saver
    $scope.$watch(function () {
        return $scope.tasks
    }, function () {
        TasksService.post($scope.tasks);
    }, true);


}

export default {
    name: 'BoardCtrl',
    fn: BoardCtrl
};
