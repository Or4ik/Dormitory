App.service('HomeService',function($http){
    this.save = function (values) {
	    return $http({
            method: 'POST',
            url   : '/api/getTabs',
            data  : values
        });
	}
});