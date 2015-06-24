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
        bacon_id = null;
        var i, len;
        Object.keys(carbonService.get()).forEach(function (element, index) {
          item = carbonService.get(element);
          if (item.category == 1) {
            scope.worseElements.push(item);
          } else if (item.category == 3) {
            scope.betterElements.push(item);
          } else {
            bacon_id = element.id;
          }
        });
        updateStripsOfBacon = function() {
          scope.stripsOfBacon = carbonService.itemsForItem(carbonService.get(14), scope.worseElements[selectedIndex]);
        };
        updateStripsOfBacon();
        scope.topPaneChanged = function(index) {
          selectedIndex = index;
          updateStripsOfBacon();
        };
        scope.itemsForSelectedItem = function(item) {
          return carbonService.itemsForItem(item, scope.worseElements[selectedIndex]);
        };
        scope.nameBuilder = function(item) {
          if (scope.itemsForSelectedItem(item) > 1) {
            return item.name.plural;
          }
          return item.name.singular;
        };
	scope.svgLoc = function(id) {
          return 'img/svgs/noun_' + id + '_cc.svg';
	};
      }
    };
}]);
