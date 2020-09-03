const express = require('express');
const router = express.Router();
const path = require("path");
const logMiddleware = require("../middlewares/usuariosLoginMiddleware");

const productosControler = require(path.resolve(__dirname,"../controllers/productosControllers.js"))



// Ruta Visualizacion de Productos de Compra
router.get('/productos', productosControler.detalleProductos);

router.get("/detalleProducto/categoria/mujer", productosControler.categoriaMujer);
router.get("/detalleProducto/categoria/hombre", productosControler.categoriaHombre);
router.get("/detalleProducto/categoria/nene", productosControler.categoriaNene);
router.get("/detalleProducto/categoria/accesorios", productosControler.categoriaAccesorios);

// Detalle de Producto para comprar
router.get("/detalleProducto", productosControler.show);







module.exports = router
// Exporto el router para que lo use app.module