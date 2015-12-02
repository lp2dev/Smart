backendApp.controller("documentoController", function($scope, documentoService, $window) {

    $scope.documento_list = [];

    list = function() {
        documentoService.list().then(function(r) {
            $scope.documento_list = r.data;
        }, function(error) {
            console.log("Error  " + error.data.message);
        })

    }
    list();

    $scope.sel = function(d) {
        $scope.documento = d;
    };

    $scope.save = function() {
        if ($scope.documento.id) {
            documentoService.update({ id: "" }, $scope.documento).then(function(r) {
                console.log(r.data);
                list();
            }, function(error) {
                console.log("Error  " + error.data.message);
            });
        } else {
            documentoService.create($scope.documento).then(function(r) {
                console.log(r.data);
                list();
            }, function(error) {
                console.log("Error  " + error.data.message);
            });
        };
    };
    $scope.delete = function(d){
        if ($window.confirm('Confirm delete')) {
            documentoService.delete({ "id": d.id }).then(function (r) {
                console.log(r.data);
                list();
            }, function (error) {
                console.log(error.data.message);
            });
        };
    };

});