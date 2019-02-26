"use strict";
const express = require("express");
const app = express();
const shoppingcart = require("./routes")
app.use(express.json());
app.use(express.static("./public"));
app.use("/", shoppingcart);

app.listen(8080, () =>{
    console.log("server is running")
})