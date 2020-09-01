
const path = require('path');
const fs = require("fs");
const {check, validationResult, body} = require('express-validator');

// let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/products.json')))

// Se requiere la Base de Datos
const {Product} = require("../database/models");

// Se Trae a la tabla ( otra forma de hacerlo )
// const Producto = db.Productos;
// traer la tabla de usuarios


const adminController = {               // OK
    listadoAdmin:function(req,res){

        Product
        .findAll()
        .then(productos =>{
            //return res.send(platos)
            let productosUsuario = {
                productos: productos,
                nombre: req.session.nombre,
                id: req.session.idUser
            };
            console.log(productos);
            res.render(path.resolve(__dirname , '..','views','admin','misProductos') , {productosUsuario});
        })           
        .catch(error => res.send(error))
    },


    detalleAdmin:function(req,res){        // OK
        let productoId = req.params.id;
        Product 
        .findByPk(productoId)
        .then(detalleProducto =>{
            let productosUsuario = {
                detalleProducto: detalleProducto,
                nombre: req.session.nombre
            };
            res.render(path.resolve(__dirname,"..","views","admin","adminDetailProducto"),{productosUsuario});
        })

    },


    editAdmin:function(req,res){            // OK
    let productoId = req.params.id;
    Product 
    .findByPk(productoId)
    .then(detalleProducto =>{
        let productosUsuario = {
            detalleProducto: detalleProducto,
            nombre: req.session.nombre
        };
        res.render(path.resolve(__dirname,"..","views","admin","editProducto"),{productosUsuario});
    })

},



    editAdminSave: function(req,res){           // OK

        let errors = validationResult(req);

        if(errors.isEmpty()){

        let idNumero = parseInt(req.params.id);

            Product
            .update({
                product_id: idNumero,
                marca: req.body.marca,
                modelo: req.body.modelo,
                producto: req.body.producto,
                temporada: req.body.temporada,
                genero: req.body.genero,
                talle: req.body.talle,
                color: req.body.color,
                precio: req.body.precio,
                cantidad: req.body.cantidad,
                resumen: req.body.resumen,
                descripcion: req.body.descripcion,
                imagen: req.files ? req.files[0].filename : "",
                categoria: req.body.categoria,
            },{
                where:{
                    product_id: idNumero
                }
            })
            res.redirect("/misProductos");
        }else{
            let productoId = req.params.id;
            Product 
            .findByPk(productoId)
            .then(detalleProducto =>{
                let productosUsuario = {
                    detalleProducto: detalleProducto,
                    nombre: req.session.nombre
                };
                res.render(path.resolve(__dirname,"..","views","admin","editProducto"),{productosUsuario});
            })
        }
    },

    deleteAdmin:function(req,res){    // OK
        
        let idNumero = parseInt(req.params.id);

        Product
        .destroy({
            where:{
                product_id: idNumero
            }
        })

            res.redirect("/misProductos");
    }
}


module.exports = adminController;
