angular
  .module('troveApp')
  .controller('NearbyCtrl', NearbyCtrl);

NearbyCtrl.$inject = ['$timeout', '$window', '$rootScope', '$location', 'locationService'];

function NearbyCtrl($timeout, $window, $rootScope, $location, locationService) {

  var vm = this;

  vm.nearbyMarkets;

  vm.searchRadius = 10;

  vm.setId = function(id, fmid, name) {
    $rootScope.id = id;
    $rootScope.fmid = fmid;
    $rootScope.name = name;
  }

  vm.findNearbyMarkets = function() {

    if (typeof($rootScope.lat) === "undefined") { locationService.getLocation() }

    locationService.findNearbyMarkets($rootScope.lat, $rootScope.lng, vm.searchRadius)

    .then( function (result) { vm.nearbyMarkets = result.data.nearbyMarkets; })

    .catch( function (error) { return error; })

  }

  vm.findMarketsByZip = function() {
    var zip = locationService.searchZip;
    
    locationService.findMarketsByZip(zip)

    .then( function (result) { vm.nearbyMarkets = result.data.nearbyMarkets; })

    .catch( function (error) { return error; })
  }
  
  vm.redirect = function(path) {
    $location.path(path)
  }

  vm.search = function() {
    if(locationService.searchZip.length > 0) {
      vm.findMarketsByZip();
    } else {
      vm.findNearbyMarkets();
    }
  }

  vm.search();

}
