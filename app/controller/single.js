angular.module('app').controller('SingleController', function($scope, $http, $location, $routeParams) {
    // Receving data
    $http({
        url: API_ADRESS + 'index.php?id=' + $routeParams.id,
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
    .success(function(data) {
        if (data.status == 'success') {
            console.log(data);
            $scope.veranstaltung = data.data;
            console.log($scope.veranstaltung);


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
            $scope.modal = {
                    title : 'Achtung!',
                    msg : 'Es trat ein Fehler auf bei dem Abrufen der Information! (Antwort des Servers: "' + data.message + '")',
            }
            $('#notice_modal').modal('show');
        }
    })
    .error(function(data, status) {
        $scope.modal = {
                    title : 'Achtung!',
                    msg : 'Es trat ein Fehler auf bei dem Abrufen der Information! (Interessierte können die JavaScript Konsole für mehr Infos einsehen!)',
            }
            $('#notice_modal').modal('show');
    })
    
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
        }

        $scope.modal_no = function() {
            // Do nothing
        }
        $scope.modal = {
                    title : 'Wirklich!',
                    msg : 'Wollen Sie wirklich diese Veranstaltung löschen?',
                }
                $('#question_modal').modal('show');
    }
});