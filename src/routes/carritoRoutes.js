
const express = require('express');
const router = express.Router();
const carrito = require("../controllers/carritoController");


// router.get('/', home.vistaPrincipal)

router.get('/bolso', carrito.vistaMasInfo);

module.exports = router;