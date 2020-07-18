const express = require('express');
const router = express.Router();
const formularioCarga = require("../controllers/formulariosController");
const multer = require('multer');
const path = require('path');
const logMiddleware = require("../middlewares/usuariosLoginMiddleware");

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

router.get('/cargaProducto', logMiddleware,formularioCarga.show);
router.post('/cargaProducto/carga',logMiddleware, upload.single('imagen'), formularioCarga.carga);



module.exports = router;