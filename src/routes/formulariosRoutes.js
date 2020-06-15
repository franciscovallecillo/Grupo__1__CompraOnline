

const express = require('express');
const router = express.Router();
const cargaVendedor = require("../controlers/formulariosController");



// router.get('/', home.vistaPrincipal)

router.get('/cargaProducto', cargaVendedor.carga);


module.exports = router;