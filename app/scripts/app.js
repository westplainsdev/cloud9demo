'use strict';

angular.module('538134App',  ['ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' });
    $routeProvider.when('/about', { templateUrl: 'views/about.html', controller: 'AboutCtrl' });
    $routeProvider.when('/contact', { templateUrl: 'views/contact.html', controller: 'ContactCtrl' });
    $routeProvider.when('/services', { templateUrl: 'views/services.html', controller: 'ServicesCtrl' });
    $routeProvider.otherwise({ redirectTo: '/' });
  });
