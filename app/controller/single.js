angular.module('app').controller('SingleController', function($scope, $http, $location, $routeParams, NotificationService, LoadingScreenService) {
    
    LoadingScreenService.show('Daten werden geladen');

    // Receving data
    $http({
        url: API_ADRESS + 'veranstaltung/' + $routeParams.id,
        method: 'GET'
    })
    .success(function(data) {
        LoadingScreenService.hide();
        if (data.status == 'success') {

            $scope.veranstaltung = data.data;
            $scope.veranstaltung.status = {
                message: $scope.veranstaltung.status_message,
                type: $scope.veranstaltung.status_type,
            };



            switch($scope.veranstaltung.status.type) {
                case 'positive':
                    $scope.veranstaltung.status.icon = 'checkmark';
                    break;
                case 'negative':
                    $scope.veranstaltung.status.icon = 'close';
                    break;
                default:
                    $scope.veranstaltung.status.icon = 'attention';
                    break;
                
            }


        } else {
            NotificationService.show('Achtung!', 'Es trat ein Fehler auf bei dem Abrufen der Information! (Antwort des Servers: "' + data.message + '")');
        }
    })
    .error(function(data, status) {
        LoadingScreenService.hide();

        var msg;
        if (status == 404) {
            msg = 'Eine Veranstaltung mit dieser ID ist nicht in der Datenbank. Falls Sie denken, dass dies ein Fehler ist kontaktieren sie einen Adminstrator!';
        } else {
            msg = 'Es trat ein Fehler auf bei dem Abrufen der Information! (Interessierte können die JavaScript Konsole für mehr Infos einsehen!)';
        }

        NotificationService.show('Achtung!', msg);
    });

    // Edit
    $scope.edit = function() {
        NotificationService.show('In Kürze!', 'Diese Funktion ist in kürze Verfügbar!');
    };

    // Deletion confirmation
    $scope.confirm = function() {
        
        $scope.modal_yes = function() {
            $location.path('veranstaltung/delete/' + $scope.veranstaltung.id);
        };

        $scope.modal_no = function() {
            // Do nothing
        };
        $scope.modal = {
                    title : 'Wirklich!',
                    msg : 'Wollen Sie wirklich diese Veranstaltung löschen?',
                };
                $('#question_modal').modal('show');
    };
});