backendApp

.controller("cursoController", function($scope, API, $window, $mdDialog, $scope, $timeout, $mdSidenav, $log, $scope) {

     API.Contrato.list({}).$promise.then(function(r) {
            $scope.contrato_list = r.results;
        }, function(error) {
            console.log("Errorum  " + error);
        });

    $scope.curso_list = [];
    $scope.page=1;
    $scope.curso={};

    $scope.list = function(page) {
        API.Curso.list({page:page, query:$scope.query}).$promise.then(function(r) {
            $scope.curso_list = r.results;
            $scope.options = r.options;
        }, function(error) {
            console.log("Errorum  " + error.detail);
        });
    };
    $scope.list($scope.page);

    $scope.listAll = function(page, page_size) {
        API.Curso.list({page:page, query:$scope.query, page_size:page_size}).$promise.then(function(r) {
            $scope.curso_list = r.results;
            $scope.options = r.options;
        }, function(error) {
            console.log("Errorum  " + error.detail);
        });
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.new = function() {
        $scope.curso.id=null;
        $mdDialog.show({
            scope: $scope.$new(),
            templateUrl: 'app/views/curso/form3.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        }).then(function(){
            $scope.list($scope.page);
            $scope.curso={};
        }, function(){
        });
    };

    $scope.get = function(d) {
        $scope.curso = API.Curso.get({id : d.id});
        $mdDialog.show({
            scope: $scope.$new(),
            templateUrl: 'app/views/curso/form3.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        }).then(function(){
            $scope.list($scope.page);
            $scope.curso={};
        }, function(){
        });
    };

    $scope.save = function() {
        if ($scope.curso.id) {
            API.Curso.update({ id: $scope.curso.id }, $scope.curso).$promise.then(function(r) {
                console.log(r);
                $mdDialog.hide();
            }, function(error) {
                console.log("Error  " + error);
            });
        } else {
            API.Curso.save($scope.curso).$promise.then(function(r) {
                console.log(r);
                $mdDialog.hide();
            }, function(error) {
                console.log("Error  " + error);
            });
        }
    };
    
    $scope.delete = function(d){
        if ($window.confirm('Usted esta Eliminando este Archivo')) {
            API.Curso.delete({ "id": d.id }).$promise.then(function (r) {
                console.log(r);
                $scope.list($scope.page);
            }, function (error) {
                console.log(error);
            });
        }
    };


     $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  })



   .controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/washedout.png';
});