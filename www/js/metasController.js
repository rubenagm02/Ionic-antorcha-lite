var app = angular.module('app.controllers')

.controller('metasCtrl', function($scope, $http, $ionicPopup) {
	//URL http://api.antorcha.mx/V0.1/metas/
	//http://api.antorcha.mx/V0.1/metaProgresos/
	/*var usuario = JSON.parse(window.localStorage.getItem("usuario"));
	console.log(usuario);
	var credenciales = {};
	$http({
          method : "GET",
          url : "http://api.antorcha.mx/V0.1/metas/" + usuario.id ,
          data:  credenciales,
      })
      .success(function(response){
        console.log(response.length);
        //Se obtienen las metas
        var metas = [];

        for (var x = 0; x < response.length; x++) {
        	var meta = {};
        	meta = response[x];
        	meta.tipoMedida = obtenerMedida(response[x].tipoMedida);
            var avance = meta.inicio - meta.fin;;

            if (meta.progreso > 0) {

                if (meta.inicio > meta.fin) {
                    avance = avance / 100 * meta.progreso - meta.fin;
                } else {
                    avance = avance / 100 * meta.fin - meta.progreso;
                }
            } else {
                avance = 0;
            }
            meta.avance = avance;
        	metas.push(meta);

        	//Se descarga su progreso
        	
        }

        $scope.metas = response;

      })
      .error(function(response){
            //$scope.response = response.nombre;
            alert("Parece que hubo un error");
      });*/

      

     $scope.actualizar = function (meta) {
     	      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
	         template: '<input type = "number" ng-model = "data.model">',
	         title: 'Actualizar Meta',
	         subTitle: 'Introduce tu nueva medida!',
	         scope: $scope,
				
	         buttons: [
	            { text: 'Cancelar' }, {
	               text: '<b>Guardar</b>',
	               type: 'button-positive',
	                  onTap: function(e) {
							
	                     if (!$scope.data.model) {
	                        //don't allow the user to close unless he enters model...
	                           e.preventDefault();
	                     } else {
	                        return $scope.data.model;
	                     }
	                  }
	            }
	         ]
	      });

	      myPopup.then(function(res) {
	         console.log('Tapped!' + meta.id, parseInt(res, 10));

	         	res = parseFloat(res, 10)
	          var metas = window.localStorage.getItem("metas");

		      if (metas.length > 10) {
		      	metas = JSON.parse(String(window.localStorage.getItem("metas")));
		      } else {
		      	metas = [];
		      }

		      var avance = 0.0;
		      if (meta.inicio > meta.fin) {
                    avance = (100 / (parseFloat(meta.inicio, 10) - parseFloat(meta.fin, 10))) * (parseFloat(meta.inicio, 10) - res);
                } else {
                    avance = (100 / (parseFloat(meta.fin, 10) - parseFloat(meta.inicio, 10))) * (res - parseFloat(meta.fin, 10));
                }

		      metas[meta.id - 1].progreso = avance;

		      $scope.metas = metas;
		      window.localStorage.setItem("metas", JSON.stringify(metas));
	      });   
     }

	 $scope.eliminar = function(meta) {
	   var confirmPopup = $ionicPopup.confirm({
	     title: 'Eliminar meta',
	     template: '¿Estás seguro de eliminar la meta?'
	   });

	   confirmPopup.then(function(res) {
	     if(res) {
	       console.log('You are sure');

	       var metas = window.localStorage.getItem("metas");

	      if (metas.length > 10) {
	      	metas = JSON.parse(String(window.localStorage.getItem("metas")));
	      } else {
	      	metas = [];
	      }

	      metas.splice(meta.id - 1, meta.id);
	      $scope.metas = metas;
	      window.localStorage.setItem("metas", JSON.stringify(metas));
	     } else {
	       console.log('You are not sure');
	     }
	   });
	 };
     

      var metas = window.localStorage.getItem("metas");

      if (metas.length > 10) {
      	metas = JSON.parse(String(window.localStorage.getItem("metas")));
      } else {
      	metas = [];
      }
      $scope.metas = metas;
})


function obtenerMedida (medida) {
    switch (medida) {
        case "Segundos" : {
            return "SEG";
        }
        case "Minutos" : {
            return "MIN";
        }
        case "Horas" : {
            return "HR";
        }
        case "Gramos" : {
            return "GR";
        }
        case "Kilogramos" : {
            return "KG";
        }
        case "Centimetros" : {
            return "CM";
        }
        case "Metros" : {
            return "MT";
        }
        case "Kilometros" : {
            return "KM";
        }
        case "Porcentaje" : {
            return "%";
        }
        case "Repeticiones" : {
            return "REP";
        }
        case "Series" : {
            return "SER";
        }
        case "Vueltas" : {
            return "VLTS";
        }
        case "Puntos" : {
            return "PTS";
        }
        case "Anotaciones" : {
            return "ATS";
        }
        case "Juegos" : {
            return "J";
        }
        default : {
            return "N/A";
        }
    }
}