(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);
ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var boughtList = this;
  boughtList.items2 = ShoppingListService.getItems2();
}
ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var buyList = this;
  buyList.items = ShoppingListService.getItems();
  buyList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}
function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [
    {
      name: "Coffee",
      quantity: "10"
    },
    {
      name: "Milk",
      quantity: "5"
    },
    {
      name: "Sugar",
      quantity: "12"
    },
    {
      name: "Cookies",
      quantity: "20"
    },
    {
      name: "Lays",
      quantity: "16"
    }
  ];
  var items2 = [];
  service.removeItem = function (itemIdex) {
    var item = {
      name: items[itemIdex].name,
      quantity: items[itemIdex].quantity
    };
    items2.push(item);

    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getItems2 = function () {
    return items2;
  };
}

})();
