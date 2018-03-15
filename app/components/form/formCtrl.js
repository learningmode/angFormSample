var app1 = angular.module('myApp.formController',[]);

app1.controller("formCtrl",['$scope','$log','$http','$location','formUserData',function($scope,$log,$http,$location,formUserData){
    $scope.user ={
        firstName: "",
        lastName :"",
        gender:"Male",
        country:"",
        hobby:{}
    };
    $scope.countries;11
    $http.get('js/data2.json').then(function(response){
        $scope.countries = response.data.records;
    },function(error){ $log.log(error);});
    $scope.submitter = function(){
        if($scope.sampleForm.$valid){
             formUserData.setUserData($scope.user);
            $location.path('/res'); 
         
        }
    }
}]);