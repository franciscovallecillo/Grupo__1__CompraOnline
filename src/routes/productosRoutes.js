const express = require('express');
const router = express.Router();
const path = require("path");

const productosControler = require(path.resolve(__dirname,"../controlers/productosControlers.js"))


// No especifico productos dado que esto ya se encuentra definido en app.js

// Estas rutas en realidad adelante llevan productos/ , pero no se específica dado que en app.js se pone productos y engloba todas las rutas que le correspondan.
// router.get('/id/:id', productosControler.idSelectionado)   // Importo del controler, ahi esta toda la función. 


// router.get('/mujer', productosControler.detalleProductos)

// Se crea la ruta
router.get('/productos', productosControler.detalleProductos)

// router.get('/accesorios', productosControler.detalleProductos)

// router.get('/nenes', productosControler.detalleProductos)

// router.get('/detalle', productosControler.detalleProductos)

module.exports = router
// Exporto el router para que lo use app.module