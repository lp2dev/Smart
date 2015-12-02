
var baseUrl = 'http://localhost:8000/';
var baseAdmisionUrl = 'http://localhost:8001/';


var client_id = '9DY7BxExAKpUFKHel4K779u8jt3WUUaPEgR1Z7rj';
var client_secret = 'oN8xOHQJFayVp80JXmQ6Rv03ZX6sNTB0HOnhRjz1UXPubBYIFIxyON3AL8mTFfx7xjwkfvUsDfUMgDI7NxLgZI5pWcbGPcaLPLm6vF09YMXsiMa81zz32e401UG4Cxt6';
var grant_type= 'password';

var config = {
    appErrorPrefix: '[WebF1x Error] ', //Configure the exceptionHandler decorator
    docTitle: 'WebF1 xTest: ',
    httpCacheName: 'httpCache',
    baseUrl: baseUrl,
    baseAdmisionUrl: baseAdmisionUrl,

    client_id: client_id,
    client_secret: client_secret,
    grant_type: grant_type,

};

angular.module('backendApp')

.value('config', config);


angular.module('backendApp').config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    allowHtml: false,
    autoDismiss: false,
    closeButton: false,
    closeHtml: '<button>&times;</button>',
    containerId: 'toast-container',
    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },
    maxOpened: 0,    
    messageClass: 'toast-message',
    newestOnTop: true,
    onHidden: null,
    onShown: null,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    progressBar: true,
    tapToDismiss: true,
    target: 'body',
    templates: {
      toast: 'directives/toast/toast.html',
      progressbar: 'directives/progressbar/progressbar.html'
    },
    timeOut: 0,
    titleClass: 'toast-title',
    toastClass: 'toast'
  });
});
//extendedTimeOut: 1000,
//timeOut: 5000,


angular.module('backendApp').config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    // $httpProvider.defaults.headers.post['Content-Type'] = undefined;
    // $httpProvider.defaults.headers.put['Content-Type'] = undefined;
}])

.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
