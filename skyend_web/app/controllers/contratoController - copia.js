backendApp.controller("contratoController", function($scope, contratoService, $window) {

    $scope.contrato_list = [];

    list = function() {
        contratoService.list().then(function(r) {
            $scope.contrato_list = r.data;
        }, function(error) {
            console.log("Error  " + error.data.message);
        })

    }
    list();

    $scope.sel = function(d) {
        $scope.contrato = d;
    };

    $scope.save = function() {
        if ($scope.contrato.id) {
            contratoService.update({ id: "" }, $scope.contrato).then(function(r) {
                console.log(r.data);
                list();
            }, function(error) {
                console.log("Error  " + error.data.message);
            });
        } else {
            contratoService.create($scope.contrato).then(function(r) {
                console.log(r.data);
                list();
            }, function(error) {
                console.log("Error  " + error.data.message);
            });
        };
    };
    $scope.delete = function(d){
        if ($window.confirm('Confirm delete')) {
            contratoService.delete({ "id": d.id }).then(function (r) {
                console.log(r.data);
                list();
            }, function (error) {
                console.log(error.data.message);
           });
        };
    };

});