function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
    'ngInject';

    if (process.env.NODE_ENV === 'production') {
        $compileProvider.debugInfoEnabled(false);
    }

    $compileProvider.preAssignBindingsEnabled(true);

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'BoardCtrl as home',
            templateUrl: 'home.html',
            title: 'Home',
            resolve: {
                tasksReady: function (TasksService) {
                    return TasksService.isReady;
                }
            }
        })
        .state('chart', {
            url: '/chart',
            templateUrl: 'chart.html',
            controller: 'ChartCtrl as chart',
            title: 'Chart',
            resolve: {
                tasksReady: function (TasksService) {
                    return TasksService.isReady;
                }
            }
        })

    $urlRouterProvider.otherwise('/');

}

export default OnConfig;
