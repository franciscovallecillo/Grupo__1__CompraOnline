const express = require('express');
const router = express.Router();
const home = require('../controlers/homeControles.js')


// router.get('/', home.vistaPrincipal)

router.get('/home', home.vistaMasInfo)

module.exports = router