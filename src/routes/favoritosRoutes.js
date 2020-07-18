const express = require("express");
const router = express.Router();
const path = require("path");
const favoritosController = require(path.resolve(__dirname,"../controllers/favoritosController.js"));
const logMiddleware = require("../middlewares/usuariosLoginMiddleware");

router.get("/favoritos",logMiddleware, favoritosController.favoritos);

module.exports=router;