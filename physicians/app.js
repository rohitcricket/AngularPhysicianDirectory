// MODULE
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

// ROUTES
myApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.htm',
        controller: 'secondController'
    })
    
});

// CONTROLLERS
myApp.controller('homeController', ['$scope', function($scope) {
		// function to submit the form after all validation has occurred            
	$scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		if (isValid) {
		      alert('our form is really cool');
		}

	};
    
}]);

myApp.controller('secondController', ['$scope', function($scope) {
            http.get('physicians.json').success(function(data) {
          	scope.physicians = data;
        });
}]);

