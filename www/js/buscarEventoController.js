var app = angular.module('app.controllers')

.controller('buscarEventosCtrl', function($scope, $http, $location) {
	//http://api.antorcha.mx/V0.1/eventosDeportivos
	var credenciales = {};

    $http({
        method : "GET",
        url : "http://api.antorcha.mx/V0.1/eventosDeportivos",
        data:  credenciales,
    })
    .success(function(response){
        console.log(response);
        $scope.eventos = [];

        for (var x = 0; x < response.length; x++) {
        	var evento = {};
        	evento = response[x];
        	evento.fecha = formatoFecha(response[x].fechaInicio);
            evento.imagen = 'http://admin.antorcha.mx/img/eventos/eventosevento_' + evento.id + '_1_.png';
        	$scope.eventos.push(evento);
        }

    })
    .error(function(){
        console.log(response);
    });

    $scope.detalleEvento = function (evento) {
    	window.localStorage.setItem("detalleEvento", JSON.stringify(evento));
    	$location.path('/page1/page9');
    }
})

function formatoFecha (fecha) {

	var arreglo = fecha.split("-");
    var anio = arreglo[0];
    var mes  = arreglo[1];
    var dia  = arreglo[2].split(" ")[0]; 

    switch (mes) {
        case "01" : {
            mes = "Enero";
            break;
        }
        case "02" : {
            mes = "Febrero";
            break;
        }
        case "03" : {
            mes = "Marzo";
            break;
        }
        case "04" : {
            mes = "Abril";
            break;
        }
        case "05" : {
            mes = "Mayo";
            break;
        }
        case "06" : {
            mes = "Junio";
            break;
        }
        case "07" : {
            mes = "Julio";
            break;
        }
        case "08" : {
            mes = "Agosto";
            break;
        }
        case "09" : {
            mes = "Septiembre";
            break;
        }
        case "10" : {
            mes = "Octubre";
            break;
        }
        case "11" : {
            mes = "Noviembre";
            break;
        }
        case "12" : {
            mes = "Diciembre";
            break;
        }
    }

    return dia + " de " + mes + " del " + anio;
}
