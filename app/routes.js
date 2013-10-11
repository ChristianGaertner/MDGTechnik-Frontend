angular.module('app').config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/veranstaltungen', {
		templateUrl: 'app/views/all.html',
		controller: 'AllController'
	})
	
	.when('/veranstaltung/new', {
		templateUrl: 'app/views/new.html',
		controller: 'NewController'
	})

	.when('/veranstaltung/delete/:id', {
		templateUrl: 'app/views/delete.html',
		controller: 'DeleteController'
	})

	.when('/veranstaltung/:id', {
		templateUrl: 'app/views/single.html',
		controller: 'SingleController'
	})

	.otherwise({
		redirectTo: '/veranstaltungen'}
	);
});