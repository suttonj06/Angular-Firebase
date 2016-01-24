'use strict'

angular.module('firebaseApp', [
	'ngRoute',
	'firebaseApp.home' // module for home Page
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}]);