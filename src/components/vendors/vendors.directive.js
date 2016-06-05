(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('vendors', vendors);

function vendors() {
  return {
    restrict: 'E',
    templateUrl: 'components/vendors/vendors.view.html',
    controller: 'VendorsCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
