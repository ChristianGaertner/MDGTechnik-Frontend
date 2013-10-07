angular.module('app').controller('NewController', function($scope) {
	$scope.commit = function() {
		console.log($scope.data);
	};
	

	// Check Box & Datepicker
	(function() {
        $('.ui.checkbox').checkbox();
        $(function() {
            $("#datepicker").datepicker().datepicker("option", "dateFormat", "dd.mm.yy");
        });
    })();

});