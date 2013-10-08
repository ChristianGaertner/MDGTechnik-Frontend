angular.module('app').controller('NewController', function($scope, $http, $location) {

    $scope.data = {};
    $scope.data.selfSent = false;
    $scope.commit = function() {

        // Client side form validation
        if ($scope.isInvalid()) {
            $scope.modal = {
                    title : 'Achtung!',
                    msg : 'Das Formular muss fehlerfrei sein, bevor es abgesendet werden kann!',
            }
            $('#notice_modal').modal('show');
            return;
        }

        $scope.loading = {
            active : true,
            text: 'Daten werden gesendet'
        }

        // Posting data
        $http({
            url: API_ADRESS + 'index.php',
            method: 'POST',
            data: $scope.data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        .success(function(res) {
            $scope.loading.active = false

            if (res.status == 'success') {
                $location.path('veranstaltung/' + res.data.id);
            } else {
                $scope.modal = {
                    title : 'Achtung!',
                    msg : 'Es trat ein Fehler auf bei der Speicherung der Information! (Antwort des Servers: "' + data.message + '")',
                }
                $('#notice_modal').modal('show');
            }
        })
        .error(function(res, status) {

            $scope.loading.active = false

            $scope.modal = {
                title : 'Achtung!',
                msg : 'Es trat ein Fehler auf bei der Speicherung der Information! (Interessierte können die JavaScript Konsole für mehr Infos einsehen!)',
            }
            $('#notice_modal').modal('show');
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