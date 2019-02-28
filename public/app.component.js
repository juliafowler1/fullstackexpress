"use strict";
const shoppingcart = {
    template: `
    <div class="title">
    <h4>Shopping Cart</h4>
</div>
<div class="itemContainer">
    <section class="itemCard" ng-repeat="cart in $ctrl.cartItems track by $index">
        <p>ID: {{cart.id}}</p>
        <p>Product: {{cart.product}}</p>
        <p>Price: $ {{cart.price}}</p>
        <p>Quantity: {{cart.quantity}}</p>
        <form ng-submit="$ctrl.addItem(item)" ngsubmit="$ctrl.updateItem">
            <input type="text" ng-model="item.product" placeholder="Product">
            <input type="text" ng-model="item.quantity" placeholder="Quantity">
            <button>Add Item</button>
        </form>
        <button ng-click="$ctrl.deleteItem(cart.id)">X</button>
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