'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.dataservice
 * @description
 * # dataservice
 * Factory in the portfolioApp.
 */
angular.module('portfolioApp')
  .factory('dataservice', function ($http) {
    // Service logic

    // Public API here
    return {
      getQuote: function () {
  
            return $http.get('http://quotes.rest/qod.json?category=inspire')
              .success(function(response){
               return response;        
              })
              .error(function(e){
                quote = e;
              }); 
  
      }
    };
  });
