angular.module('Dormitory')
.service('mainService', function($http) {
	console.log('mainService');
	this.getJSONFile = function(successCallback, errorCallback) {
		console.log('getJSONFile');
		$http.get('/api/file').success(successCallback).error(errorCallback || function() {});
	};
});