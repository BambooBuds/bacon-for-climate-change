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
      c02Ojbect[obj.id] = obj;
    }

    bacon_id = 0;

    service = {};
    service.get = function(id) {
      if (id == null) {
        return c02Object;
      }
      return c02Object[id];
    };
    service.itemsForItem = function(exchange_x, for_y) {
      return Math.floor(for_y.ratio / exchange_x.ratio);
    };

    return service; 
}]);
