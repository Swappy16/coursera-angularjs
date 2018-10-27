(function () {
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

 function LunchCheckController($scope){
	$scope.items = "";
	$scope.message = "";
	$scope.displayMessage = function(){
		var string = $scope.items;
		$scope.message = calcWords(string);
		}
		function calcWords(string){
			if(string == "")		//check if string is empty
			{
				return "Please Enter some data";
			}	
			else
			{
				var wordList = string.split(',')
				var result="";
				if(wordList.length<=3){
					result="Enjoy!";
				}
				else if(wordList.length>3){
					result = "Too much!";
				}
				return result;
			}
		}
	};
})();