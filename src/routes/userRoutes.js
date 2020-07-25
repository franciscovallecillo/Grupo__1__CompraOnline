const logMiddleware = require("../middlewares/usuariosLoginMiddleware");
const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require(path.resolve(__dirname,"../controllers/userController.js"));


router.get("/user", logMiddleware, userController.profile);
router.get("/user2",logMiddleware, userController.profileEmpty);
//router.post("/user", userController.profile);
router.get("/altaUsuario",userController.formularioRegistro);
router.post("/altaUsuario",userController.registro);
router.get("/login", userController.pageLogin);
router.post("/login", userController.login2);
// ver nano porque hay 2 login y que hace c/u, el que se llama /login2 que hice cumple el rol de un login tradicional



router.post("/login2", userController.login2);

module.exports = router;