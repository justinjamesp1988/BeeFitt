'use strict';

angular.module('crudApp').factory('LoginService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
            	homePage:homePage,
            	loginUser:loginUser
            };
            
            return factory;

           /* function getAllUsers(){
                return $localStorage.users;
            }*/
           
            function homePage() {
            	console.log("You are in the login page");
            	var deferred = $q.defer();
                $http.get(urls.LOGIN_SERVICE_API)
                    .then(
                        function (response) {
                            /*loadAllUsers();*/
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating User : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            
            function loginUser(login) {
                var deferred = $q.defer();
                $http.get(urls.LOGIN_SERVICE_API + login.username)
                    .then(
                        function (response) {
                            console.log('Fetched successfully User with id', response);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading user with id :');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }


        }
    ]);