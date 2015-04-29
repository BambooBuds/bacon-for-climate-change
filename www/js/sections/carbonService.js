angular.module('starter').factory('carbonService', [
  "$rootScope"
, function($rootScope) {
    c02Object = {};
    for (i = 0, len = c02Data.length; i < len; i++) {
      element = c02Data[i];
      obj = {
        id: element[ID_IND],
        name: {
          item: element[NAME_IND],
          singular: element[SINGULAR_IND],
          plural: element[PLURAL_IND]
	},
        category: element[CAT_IND],
        lbsC02: element[C02_IND],
	svg: element[SVG_IND]
      };
      c02Object[obj.id] = obj;
    }

    service = {};
    service.get = function(id) {
      if (id == null) {
        return c02Object;
      }
      return c02Object[id];
    };
    service.itemsForItem = function(exchange_x, for_y) {
      return Math.floor(for_y.lbsC02 / exchange_x.lbsC02);
    };

    return service; 
}]);
