const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require(path.resolve(__dirname,"../controllers/userController.js"));

router.get("/user", userController.profile);
router.get("/altaUsuario", userController.login);

module.exports = router;