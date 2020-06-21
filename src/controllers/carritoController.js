
const path = require('path')

const carritoController = {
    vistaMasInfo:(req,res) => {
        res.render(path.resolve(__dirname,"..","views","carrito")) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.

    }
    
    



}

module.exports = carritoController;