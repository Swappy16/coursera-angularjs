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
      name: "Energy Bars",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cakes",
      quantity: "10"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate Bars",
      quantity: "5"
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
