var app = angular.module('app.controllers')

  .controller('datosDePerfilCtrl', ['$scope', '$http', '$rootScope',function($scope, $http, $rootScope ) {
    var miembro =  JSON.parse(window.localStorage.getItem("usuario"));
    //console.log(miembro);
    miembro.fechaNacimiento = obtenerFecha(miembro.fechaNacimiento);

    if(miembro.descripcion == "null" ){
      miembro.descripcion = "Cuentanos más sobre ti";
    }

    if(miembro.queBusco == "null" ){
      miembro.queBusco = "Cuentanos más sobre ti";
    }
    $scope.miembro = miembro;


    $scope.editaInformacion = function (miembro) {
      var fechaNac = miembro.fechaNacimiento.toLocaleString().toString();
      fechaNac = fechaNac.split(" ")[0].split("/");
      fechaNac = fechaNac[2]+ "/"+ fechaNac[1] +"/"+ fechaNac[0];
      console.log(fechaNac);

      var infoUsuario = {
        nombre: miembro.nombre,
        fechaNacimiento : fechaNac + " 00:00:00",
        sexo : miembro.sexo,
        descripcion : miembro.descripcion
      };
      console.log(miembro.id);

      if(miembro.descripcion == "Cuentanos más sobre ti"){
        infoUsuario.descripcion = " ";
      }

      $http({
        method : "PUT",
        url : "http://api.antorcha.mx/V0.1/miembros/" + miembro.id,
        dataType : 'jsonp',
        crossDomain:true,
        data:  infoUsuario,
      })
        .success(function(response){
          console.log(response);
          //$scope.changeView = $location.path('tab1');
        })
        .error(function(response){
          alert("Parece que hubo un error " + response);
        });
    }

  }]);

function obtenerFecha(fecha){

  var strClean = fecha.split(" ")[0].split("-");
  //strClean es igual a un arreglo donde [0] => yyyy, [1] => mm [2] => dd

  return new Date(strClean[0], strClean[1], strClean[2]);
}
