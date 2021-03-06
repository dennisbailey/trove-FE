angular
  .module('troveApp')
  .controller('MarketInfoCtrl', MarketInfoCtrl);

MarketInfoCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function MarketInfoCtrl($timeout, $window, $rootScope, marketService) {
  var vm = this;

  vm.currMkt;
  vm.currInfo;
  vm.currCategories;

  vm.hideCategories = true;

  vm.getMarketInfo = function() {

    marketService.getMarketInfo($rootScope.id, $rootScope.fmid)
    .then( function (result) {
      vm.currMkt = result;
      vm.currInfo = result.data.info[0];
      vm.currCategories = result.data.categories;
      marketService.categories = vm.currCategories;
      return result;
    })
    .catch( function (error) {
      return error;
    });
  };

  vm.getMarketInfo();


}
