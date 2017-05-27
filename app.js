const app = angular.module("tienda",[]);

app.controller("saludo", function($scope) {
	$scope.nombre = "Felix";
});

app.controller("productos", function($scope) {

	$scope.sumar = function() {
   		let prod1 = $scope.prod1;
		let prod2 = $scope.prod2;
		$scope.total = prod1 + prod2;
	}
	
});
