angular.module('app').controller('SingleController', function($scope, $http, $location, $routeParams, NotificationService) {
    
    $scope.loading = {
            active : true,
            text: 'Daten werden geladen'
        };

    // Receving data
    $http({
        url: API_ADRESS + 'index.php?id=' + $routeParams.id,
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
    .success(function(data) {
        $scope.loading.active = false;
        if (data.status == 'success') {

            $scope.veranstaltung = data.data;


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
        $scope.loading.active = false;
        NotificationService.show('Achtung!', 'Es trat ein Fehler auf bei dem Abrufen der Information! (Interessierte können die JavaScript Konsole für mehr Infos einsehen!)');
    });
    
    // // Dummy Data
    // $scope.veranstaltung = {
    //     id: $routeParams.id,
    //     status: {
    //         message: 'Ok',
    //         type: 'positive',
    //     },
    //     name : 'Konzert XYZ',
    //     author: 'Christian Gärtner',
    //     email: 'christiangaertner.film@googlemail.com',
    //     loc: 'Aula',
    //     date: new Date(),
    //     timespan: '00:00 - 07:00',
    //     req: '2x Mikrophon',
    //     notes: 'Alles soll blau sein!',
    //     workers: [
    //         {
    //             name: 'Christian',
    //             job: 'Licht'
    //         },
    //         {
    //             name: 'Philip',
    //             job: 'Ton'
    //         },
    //         {
    //             name: 'Niloy',
    //             job: 'Ton'
    //         }
    //     ]
    // }

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