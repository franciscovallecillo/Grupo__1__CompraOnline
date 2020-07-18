
const path = require('path')

const carritoController = {
    vistaMasInfo:(req,res) => {
        let productos = "nada"
        let nombreUsuario = req.session.nombre;
        let productosUsuario = [productos,nombreUsuario]
        res.render(path.resolve(__dirname,"..","views","carrito"),{productosUsuario}); // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.

    }
    
    



}

module.exports = carritoController;