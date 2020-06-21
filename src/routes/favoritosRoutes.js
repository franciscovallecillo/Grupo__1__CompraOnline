const express = require("express");
const router = express.Router();
const path = require("path");
const favoritosController = require(path.resolve(__dirname,"../controllers/favoritosController.js"));

router.get("/favoritos", favoritosController.favoritos);

module.exports=router;