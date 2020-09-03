
const express = require('express');
const router = express.Router();
const carrito = require("../controllers/carritoController");
const loginMiddleware = require("../middlewares/loginMiddleware");


// router.get('/', home.vistaPrincipal)

router.get('/bolso',loginMiddleware, carrito.vistaMasInfo);

module.exports = router;