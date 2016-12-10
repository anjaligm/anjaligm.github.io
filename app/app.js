'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
    .module('portfolioApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider,$locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: '../views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/apps', {
                templateUrl: '../views/app.html',
                controller: 'AppsCtrl',
                controllerAs: 'app'
            })
            .when('/contact', {
                templateUrl: '../views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })
            .otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);
    })
