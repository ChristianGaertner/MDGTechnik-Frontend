angular.module('app').controller('DeleteController', function($scope, $http, $location, $routeParams) {
    $scope.id = $routeParams.id;
});