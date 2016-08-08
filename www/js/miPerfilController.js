var app = angular.module('app.controllers')

.controller('miPerfilCtrl', function($scope, $http) {
	var miembro =  JSON.parse(window.localStorage.getItem("usuario"));

	if (miembro.queBusco == "null") {
		miembro.queBusco = "Cuentanos más de ti presionando en la parte de la foto";
	}

	$scope.miembro = miembro;
	
})