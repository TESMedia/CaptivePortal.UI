//Angular Module
var myModule = angular.module('CPApp',['ngRoute']);

var BaseUrl = "http://pbcaptiveportal.azurewebsites.net/api/";

myModule.run(function ($rootScope) {
    $rootScope.company_id = "C-A";
});
