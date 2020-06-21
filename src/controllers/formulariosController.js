

const path = require('path')

const cargaProducto = {
    carga:(req,res) => {
        res.render(path.resolve(__dirname,"..","views","formularios", "cargaProducto")) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.

    }
    
    



}

module.exports = cargaProducto;