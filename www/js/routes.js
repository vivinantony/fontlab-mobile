angular.module('tltApp')

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('welcome', {
        url: '/',
        templateUrl: 'templates/welcome.html',
        controller: 'BoardCtrl'
    })

    .state('board', {
        url: '/board',
        templateUrl: 'templates/board.html',
        controller: 'BoardCtrl'
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
});
