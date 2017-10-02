var app = angular.module('crudApp',['ui.router','ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8081/SpringBootCRUDApp',
    LOGIN_SERVICE_API : 'http://localhost:8081/SpringBootCRUDApp/api/login/'
    //USER_SERVICE_API : 'http://localhost:8081/SpringBootCRUDApp/api/user/',
});

app.config(['$stateProvider', '$urlRouterProvider',

function($stateProvider, $urlRouterProvider) {
console.log("App js called...");
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/login',
            controller:'LoginController',
            controllerAs:'lctrl',
            resolve: {
                login: function ($q, LoginService) {
                    console.log('Log in the user');
                    var deferred = $q.defer();
                    LoginService.homePage().then(deferred.resolve, deferred.resolve);
                    console.log("resolved");
                    return deferred.promise;
                }
            }
        }).state('adminDashboard', {
            url: '/adminDashboard',
            templateUrl: 'partials/admindashboard',
            params:{ login: null },
            controller:'DashboardController',
            controllerAs:'dctrl'
        }).state('userDashBoard', {
            url: '/userDashboard',
            templateUrl: 'partials/userdashboard',
            params:{ login: null },
            controller:'DashboardController',
            controllerAs:'dctrl'
        });
    $urlRouterProvider.otherwise('/');
}

/*function($stateProvider, $urlRouterProvider) {

$stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'partials/login',
        controller:'LoginController',
        controllerAs:'ctrl',
        resolve: {
            login: function ($q, LoginService) {
                console.log('Log in the user');
                var deferred = $q.defer();
                LoginService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                return deferred.promise;
            }
        }
    });
$urlRouterProvider.otherwise('/');
}*/
]);

