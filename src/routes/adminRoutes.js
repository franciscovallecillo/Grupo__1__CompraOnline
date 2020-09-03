
const express = require('express');
const router = express.Router();
const path = require("path");
const loginMiddleware = require("../middlewares/loginMiddleware");
const adminController = require(path.resolve(__dirname,"../controllers/adminController.js"));
const {check, validationResult, body} = require('express-validator');




//administrador
router.get("/misProductos",loginMiddleware, adminController.listadoAdmin);
router.get("/misProductos/detail/:id",loginMiddleware, adminController.detalleAdmin);
router.get("/misProductos/edit/:id",loginMiddleware, adminController.editAdmin);
router.put("/misProductos/edit/guardar/:id",loginMiddleware, [
    check('marca').isLength({min: 5}).withMessage('Nombre muy corto (5 caracteres minimo)'),
    check('descripcion').isLength({min: 20}).withMessage('La descripcion debe tener 20 caracteres como minimo'),
    body('imagen').custom(function (value, { req }) {
      if(req.file == undefined ){
        console.log("ES UNDEFINEEEEEEEEEEEED");
        return false;
      }else{
        console.log("ANTES DE CREAR EXTENSIONNNNNNN"+req.file.originalname);
        let ext = ""+path.extname(req.file.originalname).toLowerCase();
        console.log("EXTENSIOOOOOOOON  "+ext);
        if (ext == ".jpg" || ext == ".jpeg" || ext == ".png" || ext == ".gif"){
          console.log("QUIERO PASAR X ACAAAAAAA");
          console.log("EXTENSIOOOOOOOON  "+ext);
          return true;
        }else{
          console.log("O VINE X ACAAAAAAA");
          return false;
        }
      }
    }).withMessage('Los archivos deben tener extensión JPG, JPEG, PNG o GIF')
  ], adminController.editAdminSave);
router.get("/misProductos/delete/:id",loginMiddleware, adminController.deleteAdmin);


module.exports = router
// Exporto el router para que lo use app.module