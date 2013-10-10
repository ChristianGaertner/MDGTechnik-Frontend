angular.module('app').controller('AllController', function($scope, $http, NotificationService, LoadingScreenService) {


	LoadingScreenService.show('Daten werden geladen');

    // Receving data
    $http({
        url: API_ADRESS + 'veranstaltung',
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
    .success(function(data) {
        LoadingScreenService.hide();

        if (data.status == 'success') {
            $scope.veranstaltungen = data.data;

        } else {
            NotificationService.show('Achtung!', 'Es trat ein Fehler auf bei dem Abrufen der Information! (Antwort des Servers: "' + data.message + '")');
        }
    })
    .error(function(data, status) {
        LoadingScreenService.hide();
        NotificationService.show('Achtung!', 'Es trat ein Fehler auf bei dem Abrufen der Information! (Interessierte können die JavaScript Konsole für mehr Infos einsehen!)');
    });
});