(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves',LovesFilter);

MsgController.$inject = ['$scope','lovesFilter'];
function MsgController($scope, lovesFilter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
		var message = "Yaakov likes to eat healthy snacks at night!"
		return message;
  };

  $scope.sayLovesMessage = function () {
		var msg = "Yaakov likes to eat healthy snacks at night!"
		msg = lovesFilter(msg)
		return msg;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

function LovesFilter() {
  return function(input) {
    input = input || "";
    input = input.replace("likes","loves");
    return input;
  };
}

})();
