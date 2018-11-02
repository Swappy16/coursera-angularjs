(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope','$filter'];
function MsgController($scope,$filter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
	$scope.CookieCost = .45;

  $scope.sayMessage = function () {
		var message = "Yaakov likes to eat healthy snacks at night!"
		var output = $filter('uppercase')(message);
		return output;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
