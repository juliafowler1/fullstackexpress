"use strict";
const shoppingcart = {
    template: `
    <div class="title">
        <h4>Shopping Cart</h4>
    </div>
    <div class="itemContainer">
    <section class="itemCard" ng-repeat="item in $ctrl.cartItems track by $index">
        <p>ID: {{item.id}}</p>
        <p>Product: {{item.product}}</p>
        <p>Price: $ {{item.price}}</p>
        <p>Quantity: {{item.quantity}}</p>
    </section>
    </div>
    `,
    controller: ["CartService", function(CartService){
        const vm = this;
        CartService.getshoppingcart().then(response =>{
            console.log(response)
            vm.cartItems = response.data;
        });
    }]



}


angular.module("App")
    .component("shoppingcart", shoppingcart)