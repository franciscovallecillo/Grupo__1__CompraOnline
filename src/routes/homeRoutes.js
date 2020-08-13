const express = require('express');
const router = express.Router();
const home = require('../controllers/homeController.js');
const logDBMiddleware = require('../middlewares/logDBMiddleware');



// router.get('/', home.vistaPrincipal)

router.get('/home', logDBMiddleware, home.vistaMasInfo);

module.exports = router