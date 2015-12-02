backendApp

.controller("naturalPersonController", function($scope, naturalPersonService, $window) {

    $scope.np_list = [];

    list = function() {
        naturalPersonService.list().then(function(r) {
            $scope.np_list = r.data;
        }, function(error) {
            console.log("Error  " + error.data.message);
        })

    }
    list();

    $scope.sel = function(d) {
        $scope.naturalperson = d;
    };

    $scope.save = function() {
        if ($scope.naturalperson.id) {
            naturalPersonService.update({ id: "" }, $scope.naturalperson).then(function(r) {
                console.log(r.data);
                list();
            }, function(error) {
                console.log("Error  " + error.data.message);
            });
        } else {
            naturalPersonService.create($scope.naturalperson).then(function(r) {
                console.log(r.data);
                list();
            }, function(error) {
                console.log("Error  " + error.data.message);
            });
        };
    };
    $scope.delete = function(d){
        if ($window.confirm('Confirm delete')) {
            naturalPersonService.delete({ "id": d.id }).then(function (r) {
                console.log(r.data);
                list();
            }, function (error) {
                console.log(error.data.message);
            });
        };
    };

});