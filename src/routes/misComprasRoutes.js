const express = require("express");
const router = express.Router();
const path = require("path");
const misComprasController = require(path.resolve(__dirname,"../controllers/misComprasController.js"));

router.get("/misCompras", misComprasController.misCompras);

module.exports=router;