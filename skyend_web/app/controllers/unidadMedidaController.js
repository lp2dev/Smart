backendApp

.controller("unidadMedidaController", function($scope, API, $window, $mdDialog) {

    $scope.d_list = [];
    $scope.page=1;
    $scope.unidadmedida={};

    $scope.list = function(page) {
        API.UnidadMedida.list({page:page, query:$scope.query}).$promise.then(function(r) {
            $scope.d_list = r.results;
            $scope.options = r.options;
        }, function(error) {
            console.log("Errorum  " + error.detail);
        });
    };
    $scope.list($scope.page);

    $scope.listAll = function(page, page_size) {
        API.UnidadMedida.list({page:page, query:$scope.query, page_size:page_size}).$promise.then(function(r) {
            $scope.d_list = r.results;
            $scope.options = r.options;
        }, function(error) {
            console.log("Errorum  " + error.detail);
        });
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.new = function() {
        $scope.unidadmedida.id=null;
        $mdDialog.show({
            scope: $scope.$new(),
            templateUrl: 'app/views/unidadmedida/form.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        }).then(function(){
            $scope.list($scope.page);
            $scope.unidadmedida={};
        }, function(){
        });
    };

    $scope.get = function(d) {
        $scope.unidadmedida = API.UnidadMedida.get({id : d.id});
        $mdDialog.show({
            scope: $scope.$new(),
            templateUrl: 'app/views/unidadmedida/form.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        }).then(function(){
            $scope.list($scope.page);
            $scope.unidadmedida={};
        }, function(){
        });
    };

    $scope.save = function() {
        if ($scope.unidadmedida.id) {
            API.UnidadMedida.update({ id: $scope.unidadmedida.id }, $scope.unidadmedida).$promise.then(function(r) {
                console.log(r);
                $mdDialog.hide();
            }, function(error) {
                console.log("Error  " + error);
            });
        } else {
            API.UnidadMedida.save($scope.unidadmedida).$promise.then(function(r) {
                console.log(r);
                $mdDialog.hide();
            }, function(error) {
                console.log("Error  " + error);
            });
        }
    };
    
    $scope.delete = function(d){
        if ($window.confirm('Confirm delete')) {
            API.UnidadMedida.delete({ "id": d.id }).$promise.then(function (r) {
                console.log(r);
                $scope.list($scope.page);
            }, function (error) {
                console.log(error);
            });
        }
    };

});