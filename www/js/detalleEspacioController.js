var app = angular.module('app.controllers', [])

.controller('detallesEspacioCtrl', function($scope, $http) {

	var credenciales = {};

	$http({
        method : "GET",
        url : "http://api.antorcha.mx/V0.1/espaciosDeportivos/31",
        data:  credenciales,
    })
    .success(function(response){

        console.log(response[0]);
        $scope.espacio = response[0];

    })
    .error(function(){
          console.log(response);
    });
})