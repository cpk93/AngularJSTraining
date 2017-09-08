var app = angular
    .module("SpaModule",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home",{
            templateURL:"/home.html",
            controller:"homeController"
            })
            .when("/course",{
                templateURL:"courses.html",
                controller:"courseController"
            })

    })
    .controller("homeController",function ($scope) {
    $scope.message="Home Page";
    })
    .controller("courseController",function ($scope){
        $scope.courses=["C#", "Java" , ".Net","AngularJS"];
    })
