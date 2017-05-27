const app = angular.module("pokedex",[]);

app.controller("buscador", function($scope, $http) {

	$scope.boton = "Obtener Informacion";

	$scope.buscar = function() {
		if($scope.nombre == undefined) {
			$scope.mensaje = "Debe registrar el dato a buscar";
			return;
		} else {
				$scope.mensaje = false;
		}

		$scope.boton = "Buscando...";		
		let nombre = $scope.nombre;

		// hecemos consulta a API con $http y get

		$http({
			method : "GET",
			url    : "https://pokeapi.co/api/v2/pokemon/"+nombre
		}).then(function success(response) {
			// Todo OK mostramos datos
			console.log("correcto", response);
			$scope.tipo = response.data.types[0].type.name;	
			$scope.altura = response.data.height;	
			$scope.imagen = response.data.sprites.front_default;	

			$scope.boton = "Obtener Informacion";

		}, function error(response) {
			// Problema, mostramos mensaje de alerta
			console.log("Ocurrio algo inesperado",response);
			$scope.boton = "Obtener Informacion";

		})
	}

});

