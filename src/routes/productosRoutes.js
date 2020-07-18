const express = require('express');
const router = express.Router();
const path = require("path");
const logMiddleware = require("../middlewares/usuariosLoginMiddleware");

const productosControler = require(path.resolve(__dirname,"../controllers/productosControllers.js"))



// Ruta Visualizacion de Productos de Compra
router.get('/productos', productosControler.detalleProductos);

// Detalle de Producto para comprar
router.get("/detalleProducto", productosControler.show);






module.exports = router
// Exporto el router para que lo use app.module