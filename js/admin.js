 var app = angular.module('lawyer995Admin', ['ngRoute', 'adminControllers'] );


 app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
      when('/users', {
        templateUrl: 'partials/users.html',
        controller: 'UserCtrl'
      }).
      when('/attornies', {
        templateUrl: 'partials/attornies.html',
        controller: 'AttorneyCtrl'
      }).
      when('/cases', {
        templateUrl: 'partials/cases.html',
        controller: 'CaseCtrl'
      }).
      otherwise({
        redirectTo: 'users'
      });
    }
 ]);
