function ChartCtrl($scope, $filter,TasksService) {
    'ngInject';
    $scope.tasks = TasksService.tasks;
    var  isArchived = (el)=>{
        return !!(typeof el.isArchived!='undefined' && el.isArchived)
    };
    var isCorrectState = (el)=> {
        return el.state >= 1 && el.state <= 3
    };
    var activeCondition = (el)=>{
        return isCorrectState(el) && !isArchived(el) && el.finishDate.length
    };
    var deliveryDateCondition = (el)=>{
        return el.finishDate.length==0 && !isArchived(el)
    };

    let tasksInTime = $filter('TasksFilter')($scope.tasks);
    let activeTasks = $filter('TasksFilter')($scope.tasks,activeCondition);
    let withoutDeliveryDate = $filter('TasksFilter')($scope.tasks,deliveryDateCondition);
    $scope.labels=['As planed','Overdue'];
    $scope.options = {
        legend: {
            display:true,
            position:'bottom'
        }
    };


    $scope.data = [tasksInTime.length, activeTasks.length-tasksInTime.length,withoutDeliveryDate.length];


}

export default {
    name: 'ChartCtrl',
    fn: ChartCtrl
};
