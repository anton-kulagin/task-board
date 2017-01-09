function TasksService($http) {
    'ngInject';

    const service = {};
    service.tasks = [];
    
    let getTasks = ()=> {
        return $http.get('tasks');
    };

    let postTask = (data)=>{
        return  $http({
            url: 'tasks',
            method:'POST',
            data: data
        })
    };

    service.isReady = getTasks();
    service.isReady
        .then(response => service.tasks = response.data);

    service.get = function () {
        return new Promise((resolve, reject) => {
            getTasks().then(
                (response) => {
                    service.tasks = response.data;
                    resolve(data);
                },
                (err, status) => {
                    reject(err, status);
                });
        });
    };

    service.post = function (data) {
        return new Promise((resolve, reject) => {
            postTask(data).then(
                (response) => {
                    service.tasks = response.data;
                    resolve(data);
                },
                (err, status) => {
                    reject(err, status);
                });
        });
    };

    return service;

}

export default {
    name: 'TasksService',
    fn: TasksService
};
