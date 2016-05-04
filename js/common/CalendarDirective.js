App.directive('calendar', function() {
    // ......code ....
    function timeNow () {
        return Date.now();
    };
    return {
        restrict   : 'EA',
        templateUrl: 'js/common/calendar.html',
        scope      : {
            scopetext: '=mytext',
            label    :'='
        },
        link       : function(scope, element, attrs) {
           scope.time = timeNow();
        }
    };
});