angular.module('app').controller('DeleteController', function($scope, $http, $location, $routeParams, NotificationService) {
    $scope.id = $routeParams.id;

    // otherwise this would result in a string "undefined"
    $scope.key = '';

    $scope.delete = function() {
        $http({
            url: API_ADRESS + 'veranstaltung/' + $scope.id + '?key=' + window.btoa($scope.key),
            method: 'DELETE',
            data: $scope.key,
        })
        .success(function(res) {
            NotificationService.show('Hinweis', 'Die Veranstaltung wurde erfolgreich gelöscht');
            $location.path('veranstaltungen');
        })
        .error(function(res, status) {
            console.log(res);
            if (status == 403) {
                NotificationService.show(
                    'Hinweis',
                    'Anscheinend wurde keine ID übermittelt überprüfen Sie ihre URL.' + 
                    '<br /> Sie muss in etwas so aussehen: <code>/delete/1234</code>'
                );
            } else if(status == 401) {
                if (res.message == 'Please provide the key for this event') {
                    NotificationService.show(
                        'Achtung!',
                        'Bitte geben sie einen Schlüssel ein!'
                        );
                } else {
                    NotificationService.show(
                        'Achtung!',
                        'Der eingegebene Schlüssel ist nicht valide!'
                        );
                }
            }
        });
    };

});