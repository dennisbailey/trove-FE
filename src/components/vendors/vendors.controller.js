angular
  .module('troveApp')
  .controller('VendorsCtrl', VendorsCtrl);

VendorsCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function VendorsCtrl($timeout, $window, $rootScope, marketService) {

  var vm = this;

  vm.vendors;
  
  vm.id = $rootScope.id || 1238;
  vm.fmid = $rootScope.fmid || 1001672;

  vm.getVendors = function() {
    marketService.getMarketVendors(vm.fmid)
    
    .then( function (result) { vm.vendors = result.data.vendors;
                               vm.vendors.forEach(function(el) {
                                 el.backgroundUrl = 'images/categories/final/cat' + el.category_id + '.jpg';
                               }) })
    
    .catch( function (error) { return error; });  
    
  }

  vm.getVendors();

}
