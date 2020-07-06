const express = require('express');
const router = express.Router();
const formularioCarga = require("../controllers/formulariosController");
const multer = require('multer');
const path = require('path');

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

router.get('/cargaProducto', formularioCarga.show);
router.post('/cargaProducto/carga', upload.single('imagen'), formularioCarga.carga);



module.exports = router;