angular.module('app').controller('NewController', function($scope, $http, $location) {

    $scope.data = {};
    $scope.data.selfSent = false;
    $scope.commit = function() {

        // Client side form validation
        // if ($scope.isInvalid()) {
        //     $scope.modalMsg = 'Das Formular muss fehlerfrei sein, bevor es abgesendet werden kann!';
        //     $('.ui.modal').modal('show');
        //     return;
        // };

        // Posting data
        $http({
            url: API_ADRESS + 'index.php',
            method: 'POST',
            data: $scope.data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        .success(function(data) {
            if (data.status == 'success') {
                $location.path('all');
            } else {
                $scope.modalMsg = 'Es trat ein Fehler auf bei der Speicherung der Information! (Antwort des Servers: "' + data.message + '")';
                $('.ui.modal').modal('show');
            }
        })
        .error(function(data, status) {
            $scope.modalMsg = 'Es trat ein Fehler auf bei der Speicherung der Information! (Interessierte können die JavaScript Konsole für mehr Infos einsehen!)';
            $('.ui.modal').modal('show');
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