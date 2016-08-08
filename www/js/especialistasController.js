var app = angular.module('app.controllers')

.controller('especialistasCtrl', function($scope, $http) {

    $scope.buscaEspecialistas = function(){
      var credenciales = {};

      $http({
          method : "GET",
          url : "http://api.antorcha.mx/V0.1/xEspecialidad/" + $scope.tipo + "/" + $scope.municipio ,
          data:  credenciales,
      })
      .success(function(response){
          console.log(response);
          var respuesta = response;
          for(especialista in response){
            
            if(especialista.especialidad == 1 ){
                respuesta.especialidad = "Nutriologo";//Fisioterapeuta
            }else if(especialista.especialidad == 2){
                respuesta.especialidad = "Fisioterapeuta";//
            }else if(especialista.especialidad == 3){
                respuesta.especialidad = "Entrenador";//
            }
          }
          $scope.especialistas = respuesta;
          //$rootScope.usuario =  response;
          //$scope.changeView =   $location.path('tab1');
      })
      .error(function(response){
            //$scope.response = response.nombre;
            console.log(response);
      });
    }


})
