'use strict';
accountsApp

//=================================================
// LOGIN
//=================================================

.controller('loginController', ['$scope', '$location', 'authService', 'config', 'toastr','$window',

    function ($scope, $location, authService, config, toastr,$window) {

    //message.show("Mi mundo");
    //message.show("Hola mundo2");
    //toastr.success('Hello world!', 'Toastr fun!');
    //toastr.error('Hello world2!', 'Toastr fun!');

    $scope.loginData = {
        userName: "",
        password: "",
        useRefreshTokens: false
    };

    $scope.message = "";

    $scope.login = function () {

        //Materials.showMessage('Hola');
        toastr.success('Are you the six fingered man?', 'Inigo Montoya');
        //toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
        authService.login($scope.loginData).then(function (response) {
            console.log(authService.authentication.roles);
            //$location.path('/orders');
            $window.location="../skyend_web/";

        },
        function (err) {
           $scope.message = err.error_description;
       });
    };


}]);