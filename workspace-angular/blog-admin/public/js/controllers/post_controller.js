var app = angular.module('blogadmin');
app.controller('PostController', function ($scope, $http, $routeParams) {

    var urlApi = 'https://blog-server-lp3.herokuapp.com/post/';

    if ($routeParams.id) {
        $scope.titulo = 'Editar post';
        $http
            .get(urlApi + '/' + $routeParams.id)
            .then(
                function (resposta) {
                    $scope.post = resposta.data;
                },
                function (erro) {
                    console.log(erro);
                }
            );
    } else {
        $scope.titulo = 'Novo post';
        $scope.post = {
            titulo: '',
            conteudo: '',
            tags: '',
            dataPostagem: new Date()
        };
    }

    $scope.enviando = false;

    $scope.posts = [];
    var recuperarPosts = function () {
        $http
            .get(urlApi)
            .then(
                function (resposta) {
                    $scope.posts = resposta.data;
                },
                function (erro) {
                    console.log(erro);
                }
            );
    };
    recuperarPosts();

    $scope.postar = function () {
        $scope.enviando = true;
        $scope.sucesso = false;
        $scope.erro = false;
        $scope.post.dataPostagem = new Date();

        $('html, body').animate({
            scrollTop: $('#mensagem').offset().top
        }, 1000);

        if ($routeParams.id) {
            $http
                .put(urlApi, $scope.post)
                .then(
                    function (resposta) {
                        console.log(resposta);
                        $scope.sucesso = true;
                        $scope.enviando = false;
                    },
                    function (erro) {
                        console.log(erro);
                        $scope.erro = true;
                        $scope.enviando = false;
                    }
                );
        } else {
            $http
                .post(urlApi, $scope.post)
                .then(
                    function (resposta) {
                        console.log(resposta);
                        $scope.sucesso = true;
                        $scope.enviando = false;
                    },
                    function (erro) {
                        console.log(erro);
                        $scope.erro = true;
                        $scope.enviando = false;
                    }
                );
        }
    };

    $scope.aoRemover = function (post) {
        $scope.postSelecionado = post;
    };

    $scope.remover = function () {
        $scope.sucesso = false;
        $scope.erro = false;

        $http
            .delete(urlApi + $scope.postSelecionado.id)
            .then(
                function (resposta) {
                    console.log(resposta);
                    $scope.sucesso = true;
                    recuperarPosts();
                },
                function (erro) {
                    console.log(erro);
                    $scope.erro = true;
                }
            );
    };
});