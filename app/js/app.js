var app = angular.module("myApp",['myApp.formController','myApp.resultController','ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'components/form/form.html',
        controller:'formCtrl'
    }).when('/res',{
        templateUrl:'components/result/result.html',
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
