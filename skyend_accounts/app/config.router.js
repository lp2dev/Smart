accountsApp

.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
})
.run(
    ['$rootScope', '$state', '$stateParams','authService','$location',
      function ( $rootScope,   $state,   $stateParams, authService,$location) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;     
        /*******************************agregado**************************/
        authService.fillAuthData(); 
        if(authService.authentication.isAuth==false){
            $location.path('/login');
        }       
        /******************************************************************/
      }
    ]
  )

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,   $urlRouterProvider) {
    $stateProvider

    //------------------------------
    // LOGIN
    //------------------------------
    .state('login', {
        url: '/login',
        controller: "loginController",
        templateUrl: 'app/views/login.html'
    })


    //------------------------------
    // HOME
    //------------------------------
    .state('app', {
        url: '/app',
        templateUrl: 'app.html'
    })


    $urlRouterProvider.otherwise('/login');


}]);


