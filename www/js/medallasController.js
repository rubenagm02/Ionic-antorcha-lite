function obtenerTipoMedalla (tipo) {
	switch (tipo) {
		case "5" : {
			return "Chispa"
		}
		case "4" : {
			return "Flama"
		}
		case "3" : {
			return "Fuego"
		}
		case "2" : {
			return "Antorcha"
		}
		case "1" : {
			return "Prometeo"
		}
	}
}

var app = angular.module('app.controllers')

.controller('medallasCtrl', function($scope, $http) {
	var credenciales = {};
	var indice = 0;
	var medallas = {};

    $http({
        method : "GET",
        url : "http://api.antorcha.mx/V0.1/medallas",
        data:  credenciales,
    })
    .success(function(response){

        console.log(response[0]);
        medallas = response;
        $scope.tipo_medalla = obtenerTipoMedalla(response[0].tipoMedalla);
        $scope.nombre_medalla = response[0].nombreMedalla;
        $scope.descripcion_medalla = response[0].descripcionMedalla;
        $scope.cantidad_medallas = "0/" + response.length;
	    $scope.imagen_medalla = response[0].tipoMedalla;


    })
    .error(function(){
          console.log(response);
    });

    $scope.cambiarMedallaIzquierda = function () {
        
        if (indice > 0) {
			$scope.tipo_medalla = obtenerTipoMedalla(medallas[indice - 1].tipoMedalla);
	        $scope.nombre_medalla = medallas[indice - 1].nombreMedalla;
	        $scope.descripcion_medalla = medallas[indice - 1].descripcionMedalla;
	        $scope.imagen_medalla = medallas[indice - 1].tipoMedalla;
	        indice --;
        }
    };

    $scope.cambiarMedallaDerecha = function () {
        console.log(medallas.length);
        if (indice < medallas.length) {
			$scope.tipo_medalla = obtenerTipoMedalla(medallas[indice + 1].tipoMedalla);
	        $scope.nombre_medalla = medallas[indice + 1].nombreMedalla;
	        $scope.descripcion_medalla = medallas[indice + 1].descripcionMedalla;
	        $scope.imagen_medalla = medallas[indice + 1].tipoMedalla;
	        indice ++;
        }
    };
})

