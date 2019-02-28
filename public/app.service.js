"use strict";
function CartService($http) {
    const self = this;
    self.getshoppingcart = function() {
        return $http({
            method: "GET",
            url: "/shoppingcart"
        })
    }
    self.addItem = function(item) {
        return $http({
            method: "POST",
            url: "/shoppingcart",
            data: {...item, product}
        })
    }
    self.updateItem = function(item) {
        return $http({
            method: "PUT",
            url: "/shoppingcart",
            data: {...item, quantity: Number(item.quantity)}
        })
    }

    self.deleteCar = function(id) {
        return $http({
            method: "DELETE",
            url: `/shoppingcart/${id}`
        });
    };

}

angular.module("App")
    .service("CartService", CartService)