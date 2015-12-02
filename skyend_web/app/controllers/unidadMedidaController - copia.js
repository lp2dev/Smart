backendApp

.controller("unidadMedidaController", function($scope, API, $window) {

    $scope.np_list = [];

    list = function() {
        API.UnidadMedida.query(function(r) {
            $scope.np_list = r;
        }, function(error) {
            console.log("Error  " + error);
        });

    };
    list();

    $scope.sel = function(d) {
        $scope.unidadmedida = d;
    };

    $scope.save = function() {
        if ($scope.unidadmedida.id) {
            API.UnidadMedida.update({ id: $scope.unidadmedida.id }, $scope.unidadmedida, function(r) {
                console.log(r);
                list();
            }, function(error) {
                console.log("Error  " + error);
            });
        } else {
            API.UnidadMedida.save($scope.unidadmedida, function(r) {
                console.log(r);
                list();
            }, function(error) {
                console.log("Error  " + error);
            });
        };
    };
    $scope.delete = function(d){
        if ($window.confirm('Confirm delete')) {
            API.UnidadMedida.delete({ "id": d.id }, function (r) {
                console.log(r);
                list();
            }, function (error) {
                console.log(error);
            });
        };
    };

});