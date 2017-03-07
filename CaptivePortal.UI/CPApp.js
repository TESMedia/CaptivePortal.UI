//Angular Module
var myModule = angular.module('CPApp',['ngRoute']);

var BaseUrl = "http://localhost:49873/api/";

//myModule.config(function ($routeProvider) {
//    $routeProvider.when('/', {
//        controller: 'AccountController',
//        templateUrl: 'views/login-register.html'
//    })
//})


//myModule.config(function ($routeProvider) {
//    $routeProvider
//    .when("/", {
//        templateUrl: "Views/login-register.html",
//        controller:"AccountController"
//    })
//    .when("/red", {
//        templateUrl: "red.htm"
//    })
//    .when("/green", {
//        templateUrl: "green.htm"
//    })
//    .when("/blue", {
//        templateUrl: "blue.htm"
//    }).otherwise({ redirectTo: '/' });
//});