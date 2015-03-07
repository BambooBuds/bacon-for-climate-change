angular.module('starter').factory('carbonService', [
  "$rootScope"
, function($rootScope) {
    bacon_id = 0;
    service = {};
    service.get = function(id) {
      if (id == null) {
        return c02Data;      
      }
      return c02Data[id];
    };
    service.itemsForItem = function(exchange_x, for_y) {
      return Math.floor(for_y.ratio / exchange_x.ratio);
    };

    return service; 
}]);
