App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/home/home.html',
            controller : 'HomeCtrl'
        })
        .when('/main', {
            templateUrl: 'js/main/main.html',
            controller : 'MainCtrl'
        })
        .when('/login', {
            templateUrl: 'js/login/login.html',
            controller : 'LoginCtrl'
        })
});