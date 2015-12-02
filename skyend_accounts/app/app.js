var accountsApp = angular.module('accountsApp', [
  'angularytics', 'ui.router', 'ngMessages', 'ngMaterial','ngMdIcons',
  'LocalStorageModule',
  'toastr'
  ]);

/*
accountsApp


.config(['$mdThemingProvider', function($mdThemingProvider) {

  $mdThemingProvider.definePalette('docs-blue', $mdThemingProvider.extendPalette('blue', {
    '50':   '#DCEFFF',
    '100':  '#AAD1F9',
    '200':  '#7BB8F5',
    '300':  '#4C9EF1',
    '400':  '#1C85ED',
    '500':  '#106CC8',
    '600':  '#0159A2',
    '700':  '#025EE9',
    '800':  '#014AB6',
    '900':  '#013583',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 A100',
    'contrastStrongLightColors': '300 400 A200 A400'
  }));
  $mdThemingProvider.definePalette('docs-red', $mdThemingProvider.extendPalette('red', {
    'A100': '#DE3641'
  }));
  $mdThemingProvider.theme('docs-dark', 'default')
  .primaryPalette('yellow')
  .dark();
  $mdThemingProvider.theme('default')
  .primaryPalette('docs-blue')
  .accentPalette('docs-red');
}]);
*/
accountsApp

.config(function($mdThemingProvider) {
  var customBlueMap =     $mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('input', 'default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('default')
        .primaryPalette('green');
});




accountsApp

//------------------------------
// Google Analytics 
//------------------------------
.config(['AngularyticsProvider', function(AngularyticsProvider) {
 AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);
}])
.run([
 'Angularytics',
 '$rootScope',
 '$timeout',
 function(Angularytics, $rootScope,$timeout) {
  Angularytics.init();
}]);



accountsApp

//------------------------------
// Home Controller temporal
//------------------------------
.controller('HomeController', [
  '$scope',
  '$rootScope',
  function($scope, $rootScope) {
    $rootScope.currentComponent = $rootScope.currentDoc = null;
  }]);

