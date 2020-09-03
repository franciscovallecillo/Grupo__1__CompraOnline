const express = require("express");
const router = express.Router();
const path = require("path");
const misComprasController = require(path.resolve(__dirname,"../controllers/misComprasController.js"));
const loginMiddleware = require("../middlewares/loginMiddleware");

router.get("/misCompras",loginMiddleware, misComprasController.misCompras);

module.exports=router;