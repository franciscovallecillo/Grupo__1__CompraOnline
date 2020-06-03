const express = require('express');
const router = express.Router();
let home = require('../controlers/home.controler.js')


// router.get('/', home.vistaPrincipal)

router.get('/home', home.vistaMasInfo)

module.exports = router