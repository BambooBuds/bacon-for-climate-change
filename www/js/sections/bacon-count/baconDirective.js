angular.module('starter').directive('baconCount', [
  "$rootScope",
  "carbonService"
, function($rootScope, carbonService) {
    return {
      restrict: 'E',
      templateUrl: 'js/sections/bacon-count/directive.bacon.html',
      scope: {
        carbonCount: '='
      },
      link: function(scope, element, attrs) {
        scope.$watch('carbonCount', function(newVal, oldVal) {
          scope.count = carbonService.baconForCarbon(scope.carbonCount);
        });
        scope.count = "notyetset";
      }
    };
}]);
