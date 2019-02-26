"use strict";
function CartService($http) {
    const self = this;
    self.getshoppingcart = function() {
        return $http({
            method: "GET",
            url: "/shoppingcart"
        })
    }

}

angular.module("App")
    .service("CartService", CartService)