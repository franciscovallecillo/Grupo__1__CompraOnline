
const express = require('express');
const router = express.Router();
const path = require("path");
const logMiddleware = require("../middlewares/usuariosLoginMiddleware");
const adminController = require(path.resolve(__dirname,"../controllers/adminController.js"));



//administrador
router.get("/misProductos",logMiddleware, adminController.listadoAdmin);
router.get("/misProductos/detail/:id",logMiddleware, adminController.detalleAdmin);
router.get("/misProductos/edit/:id",logMiddleware, adminController.editAdmin);
router.put("/misProductos/edit/guardar/:id",logMiddleware, adminController.editAdminSave);
router.get("/misProductos/delete/:id",logMiddleware, adminController.deleteAdmin);


module.exports = router
// Exporto el router para que lo use app.module