App.controller('HomeCtrl',function($scope, HomeService){
    $scope.text = {
        typingtext1 : 1,
        typingtext2 : 2,
        typingtext3 : 3
    };

    $scope.sendRequest = function (values) {
	    HomeService.save(values).then(function (response) {
		    $scope.tabs = response.data.tabs;
		}, function (response) {
		    alert(response.data);
		});
    }
});