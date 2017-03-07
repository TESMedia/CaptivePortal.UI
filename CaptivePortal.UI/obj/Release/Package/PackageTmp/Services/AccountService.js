myModule.service('AccountService', ['$http', '$rootScope', function ($http, $rootScope) {
    //Service function for POST new user.
    this.registerUser = function (userobject) {
       
        var registerData = {
            username: userobject.Email,
            email: userobject.Email,
            userpassword: userobject.Password,
            ConfirmPassword: userobject.ConfirmPassword
        };

        var URL = BaseUrl + "account/Register";
        return $http.post(URL, registerData);
    };

    //Service function for Login user.
    this.LoginUser = function (userobject) {

        var loginData = {
            UserName: userobject.UserName,
            UserPassword: userobject.PassWord,

        };
        $rootScope.UserName = userobject.username;
        var URL = BaseUrl + "account/login";
        return $http.post(URL, loginData);
    };
}]);

//myModule.service('UserLoginService', ['$http', '$rootScope', function ($http, $rootScope) {
//    //Service function for Login user.
//    this.LoginUser = function (userobject) {

//        var loginData = {
//            UserName: userobject.UserName,
//            UserPassword: userobject.PassWord,

//        };
//        $rootScope.UserName = userobject.username;
//        var URL = BaseUrl + "account/login";
//        return $http.post(URL, loginData);
//    };

//}]);