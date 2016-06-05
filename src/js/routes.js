(function() {

  'use strict';

  angular
    .module('troveApp')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

  function appConfig($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      template: '<landing></landing>'
    })

    .when('/nearby', {
      template: '<nearby></nearby>'
    })

    .when('/info', {
      template: '<market-info></market-info>'
    })

    .when('/upload', {
      template: '<upload></upload>'
    })
    
    .when('/images', {
      template: '<images></images>'
    })
    
    .when('/vendors', {
      template: '<vendors></vendors>'
    })

    .otherwise({redirectTo: '/'});

//     $locationProvider.html5Mode(true);

  }

})();