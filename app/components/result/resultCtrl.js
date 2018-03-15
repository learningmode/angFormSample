var app2 = angular.module("myApp.resultController",[])
app2.controller("resultCtrl",['$scope','$log','formUserData',function($scope,$log,formUserData){
    $scope.userInput = formUserData.getUserData();
    
    $log.info($scope.userInput);
}])