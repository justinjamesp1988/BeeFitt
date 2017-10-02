'use strict';

angular.module('crudApp').controller('LoginController',
    ['LoginService', '$scope', '$state',  function( LoginService, $scope, $state) {
    

        var self = this;
        self.login = {};
        self.logins = [];

        self.submit = submit;
        /*self.reset = reset;*/

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function submit() {
            console.log('Submitting', self.login.username);
            console.log('Submitting', self.login.password);
            if(self.login.username === undefined || self.login.username === null || self.login.password === undefined || self.login.password === null){
            	self.errorMessage = 'Enter the valid credentials for Login';
            }
            else{
            	loginUser(self.login);
            }
            
        }
        
        function loginUser(login) {
        	self.successMessage='';
            self.errorMessage='';
            LoginService.loginUser(login).then(
                function (login) {
                    console.log(self.login);
                    if(login.role == 1){
                    	$state.go('adminDashboard', {login:login});
                    }
                    else{
                    	$state.go('userDashBoard', {login:login});
                    }
                    
                },
                function (errResponse) {
                    console.error('Error while getting user ' + login + ', Error :' + errResponse.data);
                }
            );
        }


       /* function getAllUsers(){
            return UserService.getAllUsers();
        }*/

        
        /*function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.login={};
            $scope.myForm.$setPristine(); //reset Form
        }*/
    }


    ]);