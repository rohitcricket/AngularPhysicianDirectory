// MODULE
var myApp = angular.module('physicialCore', [
    'ngRoute',
    'ngResource'
]);
myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    }).when('/second', {
        templateUrl: 'pages/second.htm',
        controller: 'secondController'
    });
});
// CONTROLLERS
myApp.controller('homeController', [
    '$scope',
    '$location',
    function($scope,$location) {
        // function to submit the form after all validation has occurred            
        $scope.submitForm = function(userForm) {
            $scope.fullNameErrMesg =false;
            $scope.userNameErrMesg =false;
            $scope.emailAddErrMesg =false;
            // check to make sure the form is completely valid
            if (userForm.$valid) {
                debugger;
                //Hide Error message if everything is okay Huh 
                $scope.fullNameErrMesg =false;
                $scope.userNameErrMesg =false;
                $scope.emailAddErrMesg =false;

                // Process form data
                var userFullName = userForm.name.$modelValue,
                    userName = userForm.username.$modelValue,
                    emailAdd = userForm.email.$modelValue;
                console.log('Hi ' + userFullName + ' Thanks For Submitting Info: ');
                console.log('Your UserName : ' + userName);
                console.log('Your Email Add : ' + emailAdd);
                alert("I have printed all form detail on console As you ask to do that now I am redirecting to Search Page");
                $location.path("/second");

            }else{
                    var userFullName = userForm.name.$modelValue,
                    userName = userForm.username.$modelValue,
                    emailAdd = userForm.email.$modelValue;

                    if(!userFullName){
                        $scope.fullNameErrMesg =true;
                        return false;
                    }
                    if(!userName){
                        $scope.userNameErrMesg =true;
                        return false;
                    }
                    if(!emailAdd){
                        $scope.emailAddErrMesg =true;
                        return false;
                    }
            }
        };
    }
]);
myApp.controller('secondController', [
    '$scope',
    '$http',
    function($scope,$http) {
        $http.get('physicians.json').success(function(data) {
            $scope.physicians = data;
        });
    }
]);