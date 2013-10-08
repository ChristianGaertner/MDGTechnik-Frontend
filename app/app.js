var app = angular.module("app", ['ui.date']);

app.config(function($routeProvider) {
	$routeProvider.when('/veranstaltung', {
		templateUrl: 'app/views/all.html',
		controller: 'AllController'
	});

	$routeProvider.when('/veranstaltung/new', {
		templateUrl: 'app/views/new.html',
		controller: 'NewController'
	});

	$routeProvider.when('/veranstaltung/delete/:id', {
		templateUrl: 'app/views/delete.html',
		controller: 'DeleteController'
	});

	$routeProvider.when('/veranstaltung/:id', {
		templateUrl: 'app/views/single.html',
		controller: 'SingleController'
	});

	

	$routeProvider.otherwise({ redirectTo: '/veranstaltung/new'});
});