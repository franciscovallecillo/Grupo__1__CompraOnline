const logMiddleware = require("../middlewares/usuariosLoginMiddleware");
const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require(path.resolve(__dirname,"../controllers/userController.js"));
const logDBMiddleware = require('../middlewares/logDBMiddleware');
const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/avatar');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
   
var upload = multer({ storage: storage });


router.get("/user", logMiddleware, userController.profile);
router.put("/user/:idUser", logMiddleware, /*[
    check('nombre').isLength().withMessage('Completar Nombre'),
    check('apellido').isLength().withMessage('Completar Apellido'),
    check('email').isEmail().withMessage('Email invalido')
],*/upload.any() , userController.profileUpdate);
router.get("/altaUsuario",userController.formularioRegistro);
router.post("/altaUsuario", logMiddleware, [
    check('nombre').isLength().withMessage('Completar Nombre'),
    check('apellido').isLength().withMessage('Completar Apellido'),
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLength({min: 3}).withMessage('La contraseña debe tener 3 o mas caracteres'),
    check('password2').isLength({min: 3}).withMessage('La contraseña debe tener 3 o mas caracteres'),
    body('email').custom(function(value){
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/users.json'), {encoding: 'utf-8'}));
        for (let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].email == value){
                return false;
            }
        }
        return true;
    }).withMessage('Usuario ya existente'),
    body('password2').custom(function(value, {req}){
        if (value !== req.body.password){
            return false;
        };
        return true;
    }).withMessage('Contraseñas no coinciden')
], userController.registro);
router.get("/login", userController.pageLogin);
router.post("/login", logDBMiddleware, [
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLength({min: 3}).withMessage('La contraseña debe tener 3 o mas caracteres')
], userController.login2);
// ver nano porque hay 2 login y que hace c/u, el que se llama /login2 que hice cumple el rol de un login tradicional



router.post("/login2", userController.login2);

module.exports = router;