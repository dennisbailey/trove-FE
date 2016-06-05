angular
  .module('troveApp')
  .service('marketService', marketService);

marketService.$inject = ['$http', '$window', '$rootScope'];

function marketService($http, $window, $rootScope) {

  return {

    getMarketInfo: function(id, fmid) {
      return $http.get('https://trove-api.herokuapp.com/v1/markets/info?id=' + id + '&fmid=' + fmid + '');
    },

    getMarketMessages: function(id) {
      return $http.get('https://trove-api.herokuapp.com/v1/messages?id=' + id + '');
    },

    postMessage: function(id, payload) {
      return $http.post('https://trove-api.herokuapp.com/v1/messages?id=' + id + '', payload);
    },
    
    getMarketImages: function(id) {
      return $http.get('https://trove-api.herokuapp.com/v1/images?id=' + id + '');
    },
    
    getMarketVendors: function(fmid) {
      return $http.get(/* https://trove-api.herokuapp.com */'http://localhost:5000/v1/vendors?fmid=' + fmid + '');
    },
  }

};