var app = angular.module("app", []);


app.config(function($routeProvider) {
	$routeProvider.when('/all', {
		templateUrl: 'app/views/all.html',
		controller: 'AllController'
	});

	$routeProvider.when('/new', {
		templateUrl: 'app/views/new.html',
		controller: 'NewController'
	});

	$routeProvider.otherwise({ redirectTo: '/new'});
});