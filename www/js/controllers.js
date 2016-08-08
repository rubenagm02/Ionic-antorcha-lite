var app = angular.module('app.controllers', [])

  .controller('buscarEspaciosCtrl', function($scope, $http, $state, $cordovaGeolocation, GoogleMaps) {

    //console.log(pinsEspacios.getPins());
   // GoogleMaps.init();

  })

  .controller('pageb2Ctrl', function($scope, $location) {

    var inicio = window.localStorage.getItem("inicio");

    if (inicio = "iniciado") {
      $location.path('/page1/page10');
    }

    $scope.iniciar = function () {
      window.localStorage.setItem("inicio", "iniciado");
      $location.path('/page1/page10');
    }
  })

.controller('misActividadesCtrl', function($scope) {

  })

  .controller('misEventosCtrl', function($scope) {
    $scope.eventos = JSON.parse(window.localStorage.getItem("eventos"));
  })

  .controller('disciplinasCtrl', function($scope) {

  })

  .controller('bienvenidoCtrl', function($scope) {

  })

  .controller('iniciaSesionCtrl', function($scope, $http, $location, $rootScope) {
    $scope.response = "";

    $scope.logeo = function(){
      var credenciales = {
        "correo" : $scope.correo,
        "pass" : $scope.pass
      };
      
      $http({
        method : "POST",
        url : "http://api.antorcha.mx/login",
        data:  credenciales,
      })
        .success(function(response){
          //console.log(response);
          alert(response);
          window.localStorage.setItem( "usuario", JSON.stringify(response) );
          $scope.changeView = $location.path('/page1/page2');
        })
        .error(function(data){
            alert("Parece que hubo un error" + data);
        });
    }
  })

  .controller('regStrateCtrl', function($scope, $http, $location, $rootScope) {
    $scope.registro = function(){

      var datosUsuario = {
        "nombre" : $scope.nombre,
        "correo" : $scope.correo,
        "sexo" : $scope.genero,
        "pass" : $scope.pass,
        "fechaNacimiento" : $scope.fechaNacimiento
      }

      $http({
        method : "POST",
        url : "http://api.antorcha.mx/V0.1/miembros",
        //  url : "http://antorcha.app/V0.1/miembros",
        data:  datosUsuario,
      })
        .success(function(response){
          //  console.log(response);
          $rootScope.usuario.id = response.id;
          $scope.changeView =  $location.path('tab7');
        })
        .error(function(){
          $scope.response = response.nombre;
          //  console.log(response);
        });
    }
  })

  .controller('detallesEspacioCtrl', function($scope) {

  })

  .controller('ayudaCtrl', function($scope) {

  })

  .controller('escribirReseACtrl', function($scope, $http) {

    $scope.valorar = function () {
      var credenciales = {};
      credenciales.valoracion = $scope.puntuacion;
      var usuario = JSON.parse(window.localStorage.getItem("usuario"));
      credenciales.idMiembro = usuario.id;
      credenciales.tipo = 0;
      credenciales.id = 31;
         $http({
        method : "POST",
        url : "http://api.antorcha.mx/V0.1/valoraciones" ,
        data : credenciales,
      })
        .success(function(response){
          //console.log(response);
          $scope.disciplinas = response;
          //$rootScope.usuario =  response;
          //$scope.changeView =   $location.path('tab1');
        })
        .error(function(){
          //$scope.response = response.nombre;
          console.log(response);
        });
      }
  })

  .controller('expandeElFuegoCtrl', function($scope) {
      $scope.invitacion.codigo = "PRUEBA";
  })

  .controller('deportesFavoritosCtrl', function($scope, $http) {
    $scope.disciplinas = "";

    $http({
      method : "GET",
      //    url : "http://api.antorcha.mx/login",
      url : "http://api.antorcha.mx/V0.1/disciplinas" ,
    })
      .success(function(response){
        //console.log(response);
        $scope.disciplinas = response;
        //$rootScope.usuario =  response;
        //$scope.changeView =   $location.path('tab1');
      })
      .error(function(){
        //$scope.response = response.nombre;
        console.log(response);
      });

    $http({
      method : "GET",
      url : "http://api.antorcha.mx/V0.1/deportes" ,
    })
      .success(function(response){
        //    console.log(response);
        $scope.deportes = response;
        //$rootScope.usuario =  response;
        //$scope.changeView =   $location.path('tab1');
      })
      .error(function(){
        //$scope.response = response.nombre;
        console.log(response);
      });

    /*$scope.guardaDeporte = function(idDeporte){
     $http({
     method : "POST",
     //    url : "http://api.antorcha.mx/login",
     url : "http://api.antorcha.mx/V0.1/miembroDeporte" ,
     data : { "idMiembro" : $scope.usuario.id,
     "idDeporte" : idDeporte
     }
     })
     .success(function(response){
     //    console.log(response);
     $scope.deportes = response;
     //$rootScope.usuario =  response;
     //$scope.changeView =   $location.path('tab1');
     })
     .error(function(){
     //$scope.response = response.nombre;
     console.log(response);
     });
     }*/


  })

  .controller('datosDePerfilCtrl', function($scope, $rootScope) {
    /*console.log($scope.usuario);
     $scope.nombreUsuario = $scope.usuario.nombre;
     $scope.edad = $scope.usuario.descripcion;*/

  })


function generarCodigo(id, miembro, tipo){
        var codigo = "";
        codigo = Number(id).toString(16);

        while (codigo.length < 4) {
            codigo = "0" + codigo;
        }
        //Hasta este punto codigo mide 4

        codigo = codigo + tipo;

        //Hasta este punto codigo mide 5

        codigo = codigo + Number(miembro).toString(16);

        return codigo;
}
