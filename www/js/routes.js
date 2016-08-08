angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('bienvenido2', {
    url: '/pageb',
    templateUrl: 'templates/bienvenido.html',
    controller: 'pageb2Ctrl'
  })

  .state('pageb2', {
    url: '/pageb2',
    templateUrl: 'templates/page2.html',
    controller: 'pageb2Ctrl'
  })

  .state('pageb3', {
    url: '/pageb3',
    templateUrl: 'templates/page3.html',
    controller: 'pageb2Ctrl'
  })

  .state('pageb4', {
    url: '/pageb4',
    templateUrl: 'templates/page4.html',
    controller: 'pageb2Ctrl'
  })

  .state('pageb5', {
    url: '/pageb5',
    templateUrl: 'templates/page5.html',
    controller: 'pageb2Ctrl'
  })
      .state('tabsController.buscarEspacios', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/buscarEspacios.html',
        controller: 'buscarEspaciosCtrl'
      }
    }
  })

  .state('tabsController.buscarEventos', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/buscarEventos.html',
        controller: 'buscarEventosCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.misActividades'
      2) Using $state.go programatically:
        $state.go('tabsController.misActividades');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab4/page3
  */
  .state('tabsController.misActividades', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/misActividades.html',
        controller: 'misActividadesCtrl'
      },
      'tab4': {
        templateUrl: 'templates/misActividades.html',
        controller: 'misActividadesCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.misEventos'
      2) Using $state.go programatically:
        $state.go('tabsController.misEventos');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page14
      /page1/tab4/page14
  */
  .state('tabsController.misEventos', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/misEventos.html',
        controller: 'misEventosCtrl'
      },
      'tab4': {
        templateUrl: 'templates/misEventos.html',
        controller: 'misEventosCtrl'
      }
    }
  })

  .state('tabsController.miPerfil', {
    url: '/page4',
    views: {
      'tab5': {
        templateUrl: 'templates/miPerfil.html',
        controller: 'miPerfilCtrl'
      }
    }
  })

  .state('tabsController.disciplinas', {
    url: '/page16',
    views: {
      'tab5': {
        templateUrl: 'templates/disciplinas.html',
        controller: 'disciplinasCtrl'
      }
    }
  })

  .state('tabsController.medallas', {
    url: '/page17',
    views: {
      'tab5': {
        templateUrl: 'templates/medallas.html',
        controller: 'medallasCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.metas', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/metas.html',
        controller: 'metasCtrl'
      }
    }
  })

  .state('tabsController.especialistas', {
    url: '/page21',
    views: {
      'tab2': {
        templateUrl: 'templates/especialistas.html',
        controller: 'especialistasCtrl'
      }
    }
  })

  .state('bienvenido', {
    url: '/page6',
    templateUrl: 'templates/bienvenido.html',
    controller: 'bienvenidoCtrl'
  })

  .state('iniciaSesion', {
    url: '/page7',
    templateUrl: 'templates/iniciaSesion.html',
    controller: 'iniciaSesionCtrl'
  })

  .state('regStrate', {
    url: '/page8',
    templateUrl: 'templates/regStrate.html',
    controller: 'regStrateCtrl'
  })

  .state('tabsController.detallesEspacio', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/detallesEspacio.html',
        controller: 'detallesEspacioCtrl'
      }
    }
  })

  .state('tabsController.detallesEvento', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/detallesEvento.html',
        controller: 'detallesEventoCtrl'
      }
    }
  })

  .state('tabsController.ayuda', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/ayuda.html',
        controller: 'ayudaCtrl'
      }
    }
  })

  .state('tabsController.escribirReseA', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/escribirReseA.html',
        controller: 'escribirReseACtrl'
      }
    }
  })

  .state('tabsController.expandeElFuego', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/expandeElFuego.html',
        controller: 'expandeElFuegoCtrl'
      }
    }
  })

  .state('tabsController.deportesFavoritos', {
    url: '/page18',
    views: {
      'tab5': {
        templateUrl: 'templates/deportesFavoritos.html',
        controller: 'deportesFavoritosCtrl'
      }
    }
  })

  .state('tabsController.nuevaMeta', {
    url: '/page19',
    views: {
      'tab2': {
        templateUrl: 'templates/nuevaMeta.html',
        controller: 'nuevaMetaCtrl'
      }
    }
  })

  .state('tabsController.datosDePerfil', {
    url: '/page22',
    views: {
      'tab5': {
        templateUrl: 'templates/datosDePerfil.html',
        controller: 'datosDePerfilCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page10');



});
