const express = require("express");
const router = express.Router();
const path = require("path");
const misComprasController = require(path.resolve(__dirname,"../controllers/misComprasController.js"));
const logMiddleware = require("../middlewares/usuariosLoginMiddleware");

router.get("/misCompras",logMiddleware, misComprasController.misCompras);

module.exports=router;