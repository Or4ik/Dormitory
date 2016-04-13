'use strict';

angular.module('Dormitory')
	.controller('MainPage', MainPage);

MainPage.$inject = ['$scope', 'mainService'];
function MainPage($scope, mainService) {
	console.log('MainPage')
	mainService.getJSONFile(function(data) {
		$scope.data = data.text;
	});
};