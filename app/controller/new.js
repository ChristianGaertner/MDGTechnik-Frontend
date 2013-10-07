angular.module('app').controller('NewController', function($scope) {
	init();
	$scope.commit = function() {
		console.log($scope.data);
	};

});