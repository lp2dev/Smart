app.controller("cicloController", function($scope, cicloService, $window) {

    $scope.np_list = [];

    list = function() {
        cicloService.list().then(function(r) {
            $scope.np_list = r.data;
        }, function(error) {
            console.log("Error  " + error.data.message);
        })

    }
    list();

    $scope.sel = function(d) {
        $scope.ciclo = d;
    };

    $scope.save = function() {
        if ($scope.ciclo.id) {
            cicloService.update({ id: "" }, $scope.ciclo).then(function(r) {
                console.log(r.data);
                list();
            }, function(error) {
                console.log("Error  " + error.data.message);
            });
        } else {
            cicloService.create($scope.ciclo).then(function(r) {
                console.log(r.data);
                list();
            }, function(error) {
                console.log("Error  " + error.data.message);
            });
        };
    };
    $scope.delete = function(d){
        if ($window.confirm('Confirm delete')) {
            cicloService.delete({ "id": d.id }).then(function (r) {
                console.log(r.data);
                list();
            }, function (error) {
                console.log(error.data.message);
            });
        };
    };

});