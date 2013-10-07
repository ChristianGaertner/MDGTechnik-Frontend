angular.module('app').controller('NewController', function($scope, $http) {

	$scope.data = {};
	$scope.commit = function() {
		$http({
			url: 'http://api.mdg-technik.tk/api/v1/index.php',
			method: 'POST',
			data: $scope.data,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}).success(function(data) {
			console.log(data);
		})
	};
	

	// Check Box
	(function() {
        $('.ui.checkbox').checkbox();
    })();
});