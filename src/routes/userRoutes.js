const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require(path.resolve(__dirname,"../controllers/userController.js"));

router.get("/user", userController.profile);
router.get("/user2", userController.profileEmpty);
//router.post("/user", userController.profile);
router.get("/altaUsuario", userController.formularioRegistro);
router.post("/altaUsuario", userController.registro);
router.get("/login", userController.pageLogin);
router.post("/login", userController.login);

module.exports = router;