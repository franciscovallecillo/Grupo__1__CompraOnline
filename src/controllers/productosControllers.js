const path = require('path')
const fs = require("fs")

const {Product} = require("../database/models");

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
    categoriaMujer: function (req,res){
     
        Product.findAll({
            where : { categoria : "mujer"}
        })
        .then((producto)=> {
            let productos = producto
        
            res.render(path.resolve(__dirname, "..","views", "productos", "listaProductos"), {productos:productos})
        })
        // for ( let i = 0  ; i < productos.length ; i++){
        //     console.log(productos[i].categoria);
        // }
    },
    //     findaAll({
    //     where : { categoria : req.params.categoria },
    //     })
    // .then((producto))
    //     res.render(path_resolve(__dirname, "..","views", "productos", "listadoProductos"), {producto:producto})
    // }

    categoriaHombre: function (req,res){
        Product.findAll({
            where : { categoria : "hombre"}
        })
        .then((producto)=> {
            let productos = producto
        
            res.render(path.resolve(__dirname, "..","views", "productos", "listaProductos"), {productos:productos})
        })
    },
    categoriaNene: function (req,res){
        Product.findAll({
            where : { categoria : "nene"}
        })
        .then((producto)=> {
            let productos = producto
        
            res.render(path.resolve(__dirname, "..","views", "productos", "listaProductos"), {productos:productos})
        })
    },
    categoriaAccesorios: function (req,res){

        let productosUsuario = {
            nombre: req.session.nombre
        };


        Product.findAll({
            where : { categoria : "accesorios"}
        })
        .then((producto)=> {
            let productos = producto
        
            res.render(path.resolve(__dirname, "..","views", "productos", "listaProductos"), {productos:productos,productosUsuario:productosUsuario})
        })
    },
    showDos : function (req,res) {
        Product.findByPk(req.params.id)
        .then((productoDetalle) => {
            res.render(path.resolve(__dirname,"..","views","productos","detalleProducto"),{productoDetalle})
        })
        
        
    },

}

module.exports = productosControler;