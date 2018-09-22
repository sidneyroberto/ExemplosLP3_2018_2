var app = angular.module('blogadmin', ['ngRoute']);
app.config(function ($routeProvider) {

    $routeProvider.when('/posts', {
        templateUrl: 'partials/posts.html',
        controller: 'PostController'
    });

    $routeProvider.when('/novo', {
        templateUrl: 'partials/cadastro.html',
        controller: 'PostController'
    });

    $routeProvider.when('/editar/:id', {
        templateUrl: 'partials/cadastro.html',
        controller: 'PostController'
    });

    $routeProvider.otherwise('/posts');
});