var app = angular.module('cep', ['ngRoute']);
app.config(function ($routeProvider) {

    $routeProvider.when('/consulta', {
        templateUrl: 'partials/consulta.html',
        controller: 'LocalidadeController'
    });

    $routeProvider.otherwise('/consulta');
});