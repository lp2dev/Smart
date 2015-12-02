backendApp

.controller("contratoController", function($scope, API, $window, $mdDialog, $timeout, $q, $scope, $timeout, $mdSidenav, $log) {

 API.Documento.list({}).$promise.then(function(r) {
            $scope.documento_list = r.results;
        }, function(error) {
            console.log("Errorum  " + error);
        });



    $scope.contrato_list = [];
    $scope.page=1;
    $scope.contrato={};

    $scope.list = function(page) {
        API.Contrato.list({page:page, query:$scope.query}).$promise.then(function(r) {
            $scope.contrato_list = r.results;
            $scope.options = r.options;
        }, function(error) {
            console.log("Errorum  " + error.detail);
        });
    };
    $scope.list($scope.page);

    $scope.listAll = function(page, page_size) {
        API.Contrato.list({page:page, query:$scope.query, page_size:page_size}).$promise.then(function(r) {
            $scope.contrato_list = r.results;
            $scope.options = r.options;
        }, function(error) {
            console.log("Errorum  " + error.detail);
        });
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.new = function() {
        $scope.contrato.id=null;
        $mdDialog.show({
            scope: $scope.$new(),
            templateUrl: 'app/views/contrato/form2.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        }).then(function(){
            $scope.list($scope.page);
            $scope.contrato={};
        }, function(){
        });
    };

    $scope.get = function(d) {
        $scope.contrato = API.Contrato.get({id : d.id});
        $mdDialog.show({
            scope: $scope.$new(),
            templateUrl: 'app/views/contrato/form2.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        }).then(function(){
            $scope.list($scope.page);
            $scope.contrato={};
        }, function(){
        });
    };

    $scope.save = function() {
        if ($scope.contrato.id) {
            API.Contrato.update({ id: $scope.contrato.id }, $scope.contrato).$promise.then(function(r) {
                console.log(r);
                $mdDialog.hide();
            }, function(error) {
                console.log("Error  " + error);
            });
        } else {
            API.Contrato.save($scope.contrato).$promise.then(function(r) {
                console.log(r);
                $mdDialog.hide();
            }, function(error) {
                console.log("Error  " + error);
            });
        }
    };
    
    $scope.delete = function(d){
        if ($window.confirm('Confirm delete')) {
            API.Contrato.delete({ "id": d.id }).$promise.then(function (r) {
                console.log(r);
                $scope.list($scope.page);
            }, function (error) {
                console.log(error);
            });
        }
    };

    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    /**
     * Search for contacts.
     */
    function querySearch (query) {
      var results = query ?
          self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };
    }
    function loadContacts() {
      var contacts = [
        'Marina Augustine',
        'Oddr Sarno',
        'Nick Giannopoulos',
        'Narayana Garner',
        'Anita Gros',
        'Megan Smith',
        'Tsvetko Metzger',
        'Hector Simek',
        'Some-guy withalongalastaname'
      ];
      return contacts.map(function (c, index) {
        var cParts = c.split(' ');
        var contact = {
          name: c,
          email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
          image: 'http://lorempixel.com/50/50/people?' + index
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  
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

});

