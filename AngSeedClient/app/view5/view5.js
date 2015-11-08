'use strict';
angular.module('myApp.view5', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view5', {
                    templateUrl: 'view5NewUser/view5.html',
                    controller: 'View5Ctrl'
                });
            }])

        .controller('View5Ctrl', function ($http) {
            var self = this;
            self.userName = "";
            self.password = "";
            self.createUser = function () {
                $http({
                    method: 'POST',
                    url: 'api/allUsers',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    data: {userName: self.userName,
                        password: self.password
                    }


                }).then(function successCallback(response) {
                    self.userName = "";
                    self.password = "";
                    alert('new user created');

                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                })
            };

        });