angular.module('app').controller('NewController', function($scope, $http, $location, NotificationService, LoadingScreenService) {

    $scope.data = {};
    $scope.data.selfSent = false;
    $scope.commit = function() {

        // Client side form validation
        if ($scope.isInvalid()) {
            NotificationService.show('Achtung!', 'Das Formular muss fehlerfrei sein, bevor es abgesendet werden kann!');
            return;
        }

        LoadingScreenService.show('Daten werden gesendet');

        // Posting data
        $http({
            url: API_ADRESS + 'veranstaltung',
            method: 'POST',
            data: $scope.data,
        })
        .success(function(res) {
            LoadingScreenService.hide();

            if (res.status == 'success') {
                NotificationService.show('Wichtig!', 'Dies ist Ihr persönlicher Schlüssel für dieses Event. Gut abspeichern! <br />KEY: <div class="cg_selectable"><code>' + res.data.key + '</code></div>');
                $location.path('veranstaltung/' + res.data.id);
            } else {
                NotificationService.show('Achtung!', 'Es trat ein Fehler auf bei der Speicherung der Information! (Antwort des Servers: "' + res.message + '")');
            }
        })
        .error(function(res, status) {
            LoadingScreenService.hide();
            
            if (status == 400) {
                var errorStr = '';

                for (var index in res.data) {
                    errorStr += "<li>" + res.data[index][0] + " </li> ";
                }
                NotificationService.show('Achtung!', 'Ihre Eingaben waren fehlerhaft! <br /><ul>' + errorStr);
            } else {
                NotificationService.show('Achtung!', 'Es trat ein Fehler auf bei der Speicherung der Information! (Interessierte können die JavaScript Konsole für mehr Infos einsehen!)');
            }
        });
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