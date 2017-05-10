"use strict";

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
        })
        .when('/developer', {
            templateUrl: 'partials/developer.html',
            controller: 'DeveloperCtrl'
        })
        .when('/designer', {
            templateUrl: 'partials/designer.html',
            controller: 'DesignerCtrl'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'ContactCtrl'
        })
        .when('/singer', {
            templateUrl: 'partials/singer.html',
            controller: 'SingerCtrl'
        })
        .otherwise('/home');
});
