//declared route
'use strict'

angular.module('myApp.signIn', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider){
  
  $routeProvider.when('demo/signIn', {
    
    templateUrl: 'signIn.html',
    controller: 'SignInCrtl'
  });
  
  }])

  //home Controller

.controller('SignInCrtl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {

  var firebaseObj = new Firebase("https://sizzling-fire-9382.firebaseio.com");
  var loginObj = $firebaseSimpleLogin(firebaseObj);

$scope.user={};
    
   $scope.SignIn = function(e) {
e.preventDefault(); 
    var username = $scope.user.email;
    var password = $scope.user.password;
     
    loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            alert('Authentication successful');
        }, function(error) {
            // Failure callback
            alert('Authentication failure');
        });
}
      
}]);