'use strict';

angular.module('crudApp').controller('DashboardController',
    ['DashboardService', '$scope', '$stateParams',  function( DashboardService, $scope, $stateParams) {
    

        var self = this;
        self.userDetails = {};
        self.logins = [];

        /*self.reset = reset;*/

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;
        
        
        self.userDetails = $stateParams.login;
        DashboardService.storeInlocalStorage(self.userDetails);
        
        //console.log('UserId: '+ $stateParams.login.id);
        //console.log('UserName: '+ $stateParams.login.username);
        //console.log('Password: '+ $stateParams.login.password);
        //console.log('Role: '+ $stateParams.login.role);
       
    }


    ]);