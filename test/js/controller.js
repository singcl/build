
var app = angular.module("myApp");

app.controller("myCtrl",["$scope",
    function(             $scope) {
        // add "ie" class to html
        var isIE = !!window.navigator.userAgent.match(/MSIE/i);
        isIE && angular.element($window.document.body).addClass("ie");
        // isSmartDevice($window) && angular,element($window.document.body).addClass("smart");

        $scope.app = {
        	name:"MhdAngular",
        	version:"0.1.1",
        	settings:{
        		asideColor:"bg-dark"
        	}
        }
    }
])