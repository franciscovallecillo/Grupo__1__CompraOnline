const express = require("express");
const router = express.Router();
const path = require("path");
const favoritosController = require(path.resolve(__dirname,"../controllers/favoritosController.js"));
const loginMiddleware = require("../middlewares/loginMiddleware");

router.get("/favoritos",loginMiddleware, favoritosController.favoritos);
router.get('/favoritos/:id',loginMiddleware, favoritosController.showFavoritos);
router.get("/favoritos/seleccionados",loginMiddleware,favoritosController.seleccionados)

module.exports=router;