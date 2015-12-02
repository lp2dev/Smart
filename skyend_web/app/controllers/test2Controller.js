backendApp

.controller("test2Controller", function($scope, $rootScope) {
    $rootScope.currentComponent = $rootScope.currentDoc = null;
    $scope.saludo = function() {
        console.log("Hola " + $scope.nombre);
    }
    $scope.personas =[
    {
        "last_name": "eee",
        "first_name": "Juan",
    },
    {
        "last_name": "aaaa",
        "first_name": "Angel",
    },
    {
        "last_name": "iiii",
        "first_name": "Miguel",
    }
    ]
});