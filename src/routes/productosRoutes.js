const express = require('express');
const router = express.Router();
const path = require("path");
const loginMiddleware = require("../middlewares/loginMiddleware");

const productosControler = require(path.resolve(__dirname,"../controllers/productosControllers.js"))



// Ruta Visualizacion de Productos de Compra
router.get('/productos', loginMiddleware, productosControler.detalleProductos);

// Ruta para Filtrar Categoria
router.get("/detalleProducto/categoria/mujer", productosControler.categoriaMujer);
router.get("/detalleProducto/categoria/hombre", productosControler.categoriaHombre);
router.get("/detalleProducto/categoria/nene", productosControler.categoriaNene);
router.get("/detalleProducto/categoria/accesorios", productosControler.categoriaAccesorios);

// Ruta de Producto
router.get("/detalleProducto/:id", productosControler.showDos);

// Detalle de Producto para comprar
router.get("/detalleProducto", loginMiddleware, productosControler.show);







module.exports = router
// Exporto el router para que lo use app.module