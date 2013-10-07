angular.module('app').controller('NewController', function($scope, $http) {

	$scope.data = {};
	$scope.commit = function() {

		if ($scope.isInvalid()) {
			$('.ui.modal').modal('show');
			return;
		};

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


	var registrationForm = $('#main_form');

	$scope.isInvalid = function() {
		return !registrationForm.form('validate form');
	};
	

	// Check Box & Modals
	(function() {
        $('.ui.checkbox').checkbox();
    })();

    // Client side form validation
    (function ($) {
    $('.ui.form').form({        
      name: {
        identifier: 'name',
        rules: [{
          type: 'empty',
          prompt: 'Bitte einen Namen eingeben'
        }]
      },       
      email: {
        identifier: 'email',
        rules: [{
          type: 'empty',
          prompt: 'Bitte eine E-Mail Adresse angeben'
        },{
          type: 'email',
          prompt: 'Bitte eine echte E-Mail Adresse angeben'
        }]
      },
      eventName: {
        identifier: 'eventName',
        rules: [{
          type: 'empty',
          prompt: 'Bitte den Namen der Veranstaltung angeben'
        }]
      },       
      eventLoc: {
        identifier: 'eventLoc',
        rules: [{
          type: 'empty',
          prompt: 'Bitte den Ort der Veranstaltung angeben'
        }]
      },

      eventDate: {
        identifier: 'eventDate',
        rules: [{
          type: 'empty',
          prompt: 'Bitte das Datum der Veranstaltung angeben'
        }]
      },
      eventTime: {
        identifier: 'eventTime',
        rules: [{
          type: 'empty',
          prompt: 'Bitte den Zeitraum der Veranstaltung angeben'
        }]
      },
    }, {
      on: 'blur',
      inline: 'true'
    });
  }(jQuery));
});