'use strict';

// Setting up route
angular.module('post').config(['$stateProvider', '$urlRouterProvider', 'moduleRoutesProvider',
    function ($stateProvider, $urlRouterProvider, moduleRoutesProvider) {

        // Redirect to post list view when user requests "post"
        $urlRouterProvider
            .when('/post', '/post/list');

        // Home state routing
        $stateProvider
            .state('post', {
                url: '/post',
                templateUrl: 'modules/post/views/index.client.view.html'
            });

        moduleRoutesProvider.createRoutes('post');
    }
]);