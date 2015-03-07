angular.module('starter').directive('main', [
  "$rootScope",
  "carbonService"
, function($rootScope, carbonService) {
    return {
      restrict: 'E',
      templateUrl: 'js/sections/main-slider/directive.main.html',
      link: function(scope, element, attrs) {
        selectedIndex = 0;
        scope.worseElements = [];
        scope.betterElements = [];
        var i, len;
        for(i = 0, len = carbonService.get().length; i < len; i++) {
          if (carbonService.get(i).ratio > carbonService.get(0).ratio) {
            scope.worseElements.push(carbonService.get(i));
          } else if (carbonService.get(i).id != carbonService.get(0).id) {
            scope.betterElements.push(carbonService.get(i));
          }
        }
        updateStripsOfBacon = function() {
          scope.stripsOfBacon = carbonService.itemsForItem(carbonService.get(0), scope.worseElements[selectedIndex]);
        };
        updateStripsOfBacon();
        scope.topPaneChanged = function(index) {
          selectedIndex = index;
          updateStripsOfBacon();
        };
        scope.itemsForSelectedItem = function(item) {
          return carbonService.itemsForItem(item, scope.worseElements[selectedIndex]);
        };
      }
    };
}]);
