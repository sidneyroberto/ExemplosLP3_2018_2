var app = angular.module('cep');
app.controller('LocalidadeController', function ($scope, $http) {

    $scope.opcao = 'cep';
    $scope.localidades = [];
    var enderecoServidor =
        'https://arcane-dawn-67118.herokuapp.com/localidade/';

    $scope.consultar = function () {
        // Se a variável filtro tiver algum valor...
        if ($scope.filtro) {
            $scope.sucesso = false;
            $scope.erro = false;

            // Monta a url do serviço de consulta
            var url = enderecoServidor;
            if ($scope.opcao === 'cep') {
                url += 'cep/';
            } else {
                url += 'logradouro/';
            }
            url += $scope.filtro;

            // Faz a consulta ao serviço
            $http
                .get(url) // Retorna uma Promise
                .then(
                    // Em caso de sucesso...
                    function (resposta) {
                        $scope.localidades = resposta.data;
                        $scope.sucesso = true;
                    },
                    // Em caso de erro...
                    function (erro) {
                        console.log(erro);
                        $scope.erro = true;
                    }
                );
        }
    };

    $scope.limparResultados = function () {
        $scope.localidades = [];
    };
});