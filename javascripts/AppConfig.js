"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
    if(AuthFactory.isAuthenticated()) {
        resolve();
    } else {
        reject();
    }
});

app.run(($rootScope, $location, FIREBASE_CONFIG, AuthFactory) => {
    firebase.initializeApp(FIREBASE_CONFIG);
 $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    let logged = AuthFactory.isAuthenticated();
    let appTo;
    if(currRoute.originalPath) {
        appTo = currRoute.originalPath.indexOf('/auth') !== -1;
    }
    if(!appTo && !logged) {
        event.preventDefault();
        $location.path('/auth');
    }
 });
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/auth', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl'
        })
        .when('/talent/home', {
            templateUrl: 'partials/talent-home.html',
            controller: 'TalentHomeCtrl',
            resolve: {isAuth}
        })
        .when('/talent/jobs', {
            templateUrl: 'partials/all-jobs.html',
            controller: 'AllJobsCtrl',
            resolve: {isAuth}
        })
        .when('/talent/jobs/:id', {
            templateUrl: 'partials/job-detail.html',
            controller: 'JobDetailCtrl',
            resolve: {isAuth}
        })
        .when('/talent/myjobs', {
            templateUrl: 'partials/my-jobs.html',
            controller: 'MyJobsCtrl',
            resolve: {isAuth}
        })
        .when('/talent/services', {
            templateUrl: 'partials/all-services.html',
            controller: 'ServicesCtrl',
            resolve: {isAuth}
        })
        .when('/talent/services/:id', {
            templateUrl: 'partials/service-detail.html',
            controller: 'ServiceDetailCtrl',
            resolve: {isAuth}
        })
        .when('/talent/services/:id/edit', {
            templateUrl: 'partials/service-edit.html',
            controller: 'ServiceEditCtrl',
            resolve: {isAuth}
        })
        .when('/talent/profile/:id', {
            templateUrl: 'partials/profile-view.html',
            controller: 'ProfileViewCtrl',
            resolve: {isAuth}
        })
        .when('/talent/profile/:id/edit', {
            templateUrl: 'partials/profile-edit.html',
            controller: 'ProfileEditCtrl',
            resolve: {isAuth}
        })
        .otherwise('/auth');
});
