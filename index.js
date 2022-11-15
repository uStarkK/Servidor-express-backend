const Container = require("./class.js")
const products = new Container("./products.json")
const fs = require("fs")
const express = require("express")
const PORT = process.env.PORT || 8080;
const APP = express()
let moment = require("moment")


APP.get("/productos", async (req, res, next) =>{
    const productos = await products.getAll()
    res.send(productos)
})


APP.get("/randomProduct", async (req, res, next) =>{
        const randomId = Math.round(Math.random()* (4 - 1) + 1)
        const randomProduct = await products.getById(randomId)
        res.send(randomProduct)

})


APP.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`))

APP.on("error", error => console.log(`Error en el servidor ${error}`))