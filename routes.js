"use strict";
const express = require("express");
const shoppingcart = express.Router();
const pool = require("./connection");


shoppingcart.get("/shoppingcart", function(req, res){
    pool.query("select * from ShoppingCart").then(function (result){
        res.send(result.rows);
        console.log("GET request made")
    })

});

// shoppingcart.get("/shoppingcart", function(req, res){
//     console.log("GET CART request made");
//     for (let item of cartItems) {
//         if (item === req.params)
//         res.send(item);
//         break;
//     }
    
// });
shoppingcart.post("/shoppingcart", function(req,res){
    pool.query("insert into shoppingcart(product, price, quantity) values($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity])
    .then(function(result){
        res.send(result.rows);
        console.log("POST working")
    }); 



});

shoppingcart.put("/shoppingcart/:id", function(req, res){
    pool.query("update shoppingcart set product=$1::text, price=$2::int, quantity=$3::int where id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id])
    .then(function(){
        pool.query("select * from shoppingcart").then(function(result){
            res.send(result.rows);
            console.log("PUT working")
        })

    });

})

shoppingcart.delete("/shoppingcart/:id", function(req, res){
    pool.query("delete from ShoppingCart where id=$1::int", [req.params.id])
    .then(function(){
        pool.query("select * from ShoppingCart").then(function(result){
            res.send(result.rows)
        });
    });
    console.log("DELETE working")
})


module.exports = shoppingcart;