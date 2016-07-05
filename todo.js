/*global angular*/
angular.module('todoApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'TodoListController'
      })
      .when('/youtube', {
        templateUrl: 'show.html',
        controller: 'TodoListController'
      })
      .otherwise({ redirectTo: '/' })
      // $locationProvider.html5Mode(true)
    }])
 .controller('TodoListController', function ($scope) {
   $scope.pageRoot = 'root page'
   $scope.pageYoutube = 'youtube'
 })
