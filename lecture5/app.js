(function () {
'use strict';
angular.module('myFirstApp', [] )

.controller('myFirstController',function($scope){
	$scope.name = "Swappy";
	$scope.sayHello = function(){
		return "Hello "+ $scope.name;
	}
});


})();