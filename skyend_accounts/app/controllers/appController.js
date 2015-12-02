'use strict';
accountsApp


.controller('appController', ['$rootScope', '$scope', '$location', 'authService', 'config', '$mdSidenav', function ($scope, $rootScope, $location, authService, config, $mdSidenav) {

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    
 

    $scope.authentication = authService.authentication;

}]);