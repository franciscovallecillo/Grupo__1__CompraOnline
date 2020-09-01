const path = require('path')
const fs = require("fs")

const productosControler = {
    // listado: function(){
    //     res.render(path.resolve(__dirname,'..','views','productos','listaProductos')) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.
    // },
    detalleProductos:function(req,res){
        let productosUsuario = {
            id: req.session.idUser,
            nombre: req.session.nombre
        };
        res.render(path.resolve(__dirname,"..","views","productos","listaProductos"),{productosUsuario}) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.

    },
    show:function(req,res){
        let productosUsuario = {
            id: req.session.idUser,
            nombre: req.session.nombre
        };
        res.render(path.resolve(__dirname,"..","views","productos","detalleProducto"),{productosUsuario}) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.

    },
    categorias: function (req,res){
        // let productos = Product.findAll()
        Product.findAll({
            where : { categoria : req.params.categoria}
        })
        .then((producto)=>
            res.render(path_resolve(__dirname, "..","views", "productos", "listadoProductos"), {producto:producto})
        )
        // for ( let i = 0  ; i < productos.length ; i++){
        //     console.log(productos[i].categoria);
        // }
    }
    //     findaAll({
    //     where : { categoria : req.params.categoria },
    //     })
    // .then((producto))
    //     res.render(path_resolve(__dirname, "..","views", "productos", "listadoProductos"), {producto:producto})
    // }
}

module.exports = productosControler;