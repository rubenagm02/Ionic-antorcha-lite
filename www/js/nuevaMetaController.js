var app = angular.module('app.controllers')

.controller('nuevaMetaCtrl', function($scope, $http, $location) {
	console.log($scope.parent)

	

	$scope.guardar = function (meta) {
		
	    var metas = "";

		var itemInterno = String(window.localStorage.getItem("metas"));

		if (itemInterno.length > 2) {
			metas = JSON.parse(itemInterno);
		}

		if (metas == null || metas == "") {
			metas = [];
		}

		meta.id = metas.length + 1;
		meta.progreso = 0;

		metas.push(meta);
		window.localStorage.setItem("metas", JSON.stringify(metas));
		

		$location.path("/page1/tab1/page14");
	}

	//$scope.changeView = $location.path('tab1');
})