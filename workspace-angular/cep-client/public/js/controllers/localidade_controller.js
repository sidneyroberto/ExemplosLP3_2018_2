var app = angular.module('cep');
app.controller('LocalidadeController', function ($scope, $http) {

    $scope.opcao = 'cep';
    var enderecoServidor =
        'https://arcane-dawn-67118.herokuapp.com/localidade/';

    $scope.consultar = function () {
        if ($scope.opcao === 'cep') {

        } else {

        }
    };
});