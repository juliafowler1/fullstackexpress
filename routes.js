"use strict";
const express = require("express");

const shoppingcart = express.Router();

const cartItems = [
    {
        id: 1,
        product: "apples",
        price: 1,
        quantity: 2,

    },
    {
        id: 2,
        product: "bread",
        price: 3,
        quantity: 2,

    },
    {
        id: 3,
        product: "soup",
        price: 5,
        quantity: 3,

    },
    {
        id: 4,
        product: "steak",
        price: 8,
        quantity: 2,

    }
]

shoppingcart.get("/shoppingcart", function(req, res){
    res.send(cartItems);
    console.log("GET request made")
});

shoppingcart.get("/shoppingcart", function(req, res){
    console.log("GET CART request made");
    for (let item of cartItems) {
        if (item === req.params)
        res.send(item);
        break;
    }
    
});
shoppingcart.post("/shoppingcart", function(req,res){
    console.log(req.body)
    console.log("POST working")
    res.send(cartItems);
});

shoppingcart.put("/shoppingcart/:id", function(req, res){
    console.log(req.params.id, req.body)
    console.log("PUT working")
})

shoppingcart.delete("/shoppingcart/:id", function(req, res){
    console.log(req.params.id)
    res.send(req.params.id);
    console.log("DELETE working")
})


module.exports = shoppingcart;