const express = require('express');
const router = express.Router();
const formularioCarga = require("../controllers/formulariosController");
const multer = require('multer');
const path = require('path');
const loginMiddleware = require("../middlewares/loginMiddleware");
const {check, validationResult, body} = require('express-validator');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/imagenesProdCargados'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
      cb(null, 'producto' + '-' + Date.now()+ path.extname(file.originalname));    
    }
  })
const upload= multer({ storage })

// router.get('/', home.vistaPrincipal)

router.get('/cargaProducto', loginMiddleware, formularioCarga.show);
router.post('/cargaProducto/carga',loginMiddleware, upload.single('imagen'), [
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
], formularioCarga.carga);



module.exports = router;