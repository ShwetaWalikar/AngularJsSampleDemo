'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //Remove # tag from URL
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

   $routeProvider.when('/DetailsList', {
   		url: 'app/views/DetailsList',
    	templateUrl: 'app/views/DetailsList.html',
    	controller: 'ViewCtrl'
  	}).when('/DirectiveEx', {
  		url: 'app/views/DirectiveExample',
  		templateUrl: 'app/views/DirectiveExample.html',
    	controller: 'ViewCtrl'
  	}).otherwise({redirectTo: '/DetailsList'});
}]);
myApp.run(['$rootScope', function($rootScope){
	$rootScope.userName = "Admin";
}]);
