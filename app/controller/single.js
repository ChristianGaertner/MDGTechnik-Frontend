angular.module('app').controller('SingleController', function($scope, $http, $location, $routeParams) {
    // // Posting data
    // $http({
    //     url: API_ADRESS + 'index.php',
    //     method: 'GET',
    //     data: $scope.data,
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //     }
    // })
    // .success(function(data) {
    //     if (data.status == 'success') {
    //       $location.path('veranstaltung/' + data.id);
    //     } else {
    //       $scope.modalMsg = 'Es trat ein Fehler auf bei der Speicherung der Information! (Antwort des Servers: "' + data.message + '")';
    //       $('.ui.modal').modal('show');
    //     }
    // })
    // .error(function(data, status) {
    //     $scope.modalMsg = 'Es trat ein Fehler auf bei der Speicherung der Information! (Interessierte können die JavaScript Konsole für mehr Infos einsehen!)';
    //     $('.ui.modal').modal('show');
    // })
    
    // Dummy Data
    $scope.veranstaltung = {
        id: $routeParams.id,
        status: {
            message: 'Ok',
            type: 'positive',
        },
        name : 'Konzert XYZ',
        author: 'Christian Gärtner',
        email: 'christiangaertner.film@googlemail.com',
        loc: 'Aula',
        date: new Date(),
        timespan: '00:00 - 07:00',
        req: '2x Mikrophon',
        notes: 'Alles soll blau sein!',
        workers: [
            {
                name: 'Christian',
                job: 'Licht'
            },
            {
                name: 'Philip',
                job: 'Ton'
            },
            {
                name: 'Niloy',
                job: 'Ton'
            }
        ]
    }

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
});