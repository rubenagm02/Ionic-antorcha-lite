// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.factory('pinsEspacios', function($http) {
    var pinsEspacios = [];

    return {
      getPins: function () {
        return $http.get("http://api.antorcha.mx/V0.1/espaciosDeportivos").then(function (response) {
          pinsEspacios = response;
          return pinsEspacios;
        });
      }
    }
})

.factory('GoogleMaps', function($cordovaGeolocation, pinsEspacios){

  var map = null;

  function  initMap() {
    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(document.getElementById("map"), mapOptions);

      google.maps.event.addListenerOnce(map, 'idle', function(){

        loadPins();

        var infoWindow = new google.maps.InfoWindow({
          content: "Here I am!"
        });

        google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open(map, marker);
        });

      });

    }, function(error){
      console.log("Could not get location");
      loadPins();
    });
  }

  function loadPins() {
    pinsEspacios.getPins().then(function(pins){
        console.log('pins: ', pins);

      var pines = pins.data;
      for(var i = 0; i < pines.length; i++){
        var espacio = pines[i];
        var pinPosicion = new google.maps.LatLng(espacio.latitud, espacio.longitud);

        //agregamos el marcador al mapa
        var marker = new google.maps.Marker({ map: map,
          animation: google.maps.Animation.DROP,
          position: pinPosicion
        });

        var infoEspacio = "<h4>" + espacio.nombre + "</h4>";

        addInfoEspacio(marker, infoEspacio, espacio);

      }

    });
  }

  function addInfoEspacio(marker, infoEspacio, espacio) {
    var infoEspacio = new google.maps.InfoWindow({
      content: infoEspacio
    });

    google.maps.event.addListener(marker, 'click', function(){
        infoEspacio.open(map, marker);
    });
  }
  return {
    init: function () {
      initMap();
    }
  }
})
