
const express = require('express');
const router = express.Router();
const path = require("path");

const adminController = require(path.resolve(__dirname,"../controllers/adminController.js"));



//administrador
router.get("/misProductos", adminController.listadoAdmin);
router.get("/misProductos/detail/:id", adminController.detalleAdmin);
router.get("/misProductos/edit/:id", adminController.editAdmin);
router.put("/misProductos/edit/guardar/:id", adminController.editAdminSave);
router.get("/misProductos/delete/:id", adminController.deleteAdmin);


module.exports = router
// Exporto el router para que lo use app.module