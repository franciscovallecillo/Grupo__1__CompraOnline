const path = require('path')
const fs = require("fs")

const productosControler = {
    // listado: function(){
    //     res.render(path.resolve(__dirname,'..','views','productos','listaProductos')) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.
    // },
    detalleProductos:function(req,res){
        res.render(path.resolve(__dirname,"..","views","productos","listaProductos")) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.

    },
    show:function(req,res){
        res.render(path.resolve(__dirname,"..","views","productos","detalleProducto")) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.

    }
}

module.exports = productosControler;