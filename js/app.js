var app = angular.module("myApp",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'view/form.html',
        controller:'formCtrl'
    }).when('/res',{
        templateUrl:'view/result.html',
        controller:'resultCtrl'
    }).otherwise({
        redirectTo:'/'
    });
}]);


app.factory('formUserData',[function(){
    var userData ={};
    
    return {
        setUserData:function(user){
            userData = user;
        },
        getUserData:function(){
            return userData;
        }
    };
}]);


app.controller("formCtrl",['$scope','$log','$http','$location','formUserData',function($scope,$log,$http,$location,formUserData){
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
    },function(error){ console.log(error);});
    $scope.submitter = function(){
        if($scope.sampleForm.$valid){
             formUserData.setUserData($scope.user);
            $location.path('/res'); 
         
        }
    }
}]);

app.controller("resultCtrl",['$scope','$log','formUserData',function($scope,$log,formUserData){
    $scope.userInput = formUserData.getUserData();
    
    $log.info($scope.userInput);
}])