
const express = require('express');
const router = express.Router();
const carrito = require("../controllers/carritoController");
const logMiddleware = require("../middlewares/usuariosLoginMiddleware");


// router.get('/', home.vistaPrincipal)

router.get('/bolso',logMiddleware, carrito.vistaMasInfo);

module.exports = router;