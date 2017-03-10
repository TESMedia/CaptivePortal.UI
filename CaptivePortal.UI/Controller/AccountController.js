//Controller for Create new user
myModule.controller('AccountController', ['$scope', 'AccountService','$rootScope', function ($scope,AccountService, $rootScope) {
    //Controller Function for create new User
    $scope.registeruserobj = [];
    $scope.loginuserobj = [];

    $scope.createUser = function () {

        AccountService.registerUser($scope.registeruserobj).then(function (data) {


           
            AccountService.LoginUser($scope.registeruserobj).then(function (data) {


                window.location.href = "views/Index.html";
            });
        }
           )

    }, function (error) {

    };

    $scope.loginUser = function () {

        AccountService.LoginUser($scope.loginuserobj).then(function (data) {
            if (!!data || !!data.responseResultTls) {


                window.location.href = "views/Index.html";

            }
            else {


            }
        }
         )
    },


     function (error) {
         Notification.error('Invalid credentials');
     };

}]);


//Controller for Login User

//myModule.controller('AccountController', ['$scope', 'AccountService', '$rootScope', function ($scope, AccountService, $rootScope) {
//    //Controller Function for Login User
//    $scope.loginuserobj = [];

//    $scope.loginUser = function () {

//       AccountService.LoginUser($scope.loginuserobj).then(function (data) {
//            if (!!data || !!data.responseResultTls) {


//                window.location.href = "Views/Index.html";

//            }
//            else {


//            }
//        }
//        )
//    },


//    function (error) {
//        Notification.error('Invalid credentials');
//    };
//}]);
