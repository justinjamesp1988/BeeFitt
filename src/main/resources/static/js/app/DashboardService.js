'use strict';

angular.module('crudApp').factory('DashboardService',
    ['$localStorage', '$http', '$q', 'urls', '$state',
        function ($localStorage, $http, $q, urls, $state) {
    		
    	var factory = {
    			storeInlocalStorage:storeInlocalStorage
            };
    	
    	return factory;
    	
    	function storeInlocalStorage(userDetails) {
    		$localStorage.userDetails = userDetails;
        }
    	
    	}
    ]);
