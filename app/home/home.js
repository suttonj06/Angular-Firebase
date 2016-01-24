'use strict'

angular.module('firebaseApp.home', ['ngRoute', 'firebase'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
	});
}])

.controller('HomeCtrl', ['$scope', '$firebaseSimpleLogin', function($scope, $firebaseSimpleLogin) {
	var firebaseObj = new Firebase("https://homeServerNetToDo.firebaseio.com"); 
	var loginObj = $firebaseSimpleLogin(firebaseObj);
	$scope.user = {};

	$scope.SignIn = function(event) {
		event.preventDefault();
		var username = $scope.user.email;
		var password = $scope.user.password;
		loginObj.$login('password', {
			email: username, 
			password: password
		})
		.then(function(user) {
			console.log('Authentication successful');
		}, function(error) {
			console.log('Authentication failure');
		});
	}
}]);