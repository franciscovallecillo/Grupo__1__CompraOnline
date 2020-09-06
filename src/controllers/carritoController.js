
const path = require('path')

const {Product} = require("../database/models");

const carritoController = {
    vistaMasInfo:(req,res) => {
        let productosUsuario = {
            id: req.session.idUser,
            nombre: req.session.nombre
        };
        res.render(path.resolve(__dirname,"..","views","carrito2"),{productosUsuario}); // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.

    },
    showCarrito : function (req,res) {
        console.log("hola como estas?");
        Product.findByPk(req.params.id)

        .then((productoDetalle) => {
            let carritoUsuario = {
                productoDetalle: productoDetalle,
                nombre: req.session.nombre
            };
            res.render(path.resolve(__dirname,"..","views","carrito"),{carritoUsuario})
        })
        
        // let productoId = req.params.id;
        // Product 
        // .findByPk(productoId)
        // .then(detalleProducto =>{
        //     let productosUsuario = {
        //         detalleProducto: detalleProducto,
        //         nombre: req.session.nombre
        //     };
        //     res.render(path.resolve(__dirname,"..","views","admin","editProducto"),{productosUsuario});
     
    
        // })
    },
    



}

module.exports = carritoController;