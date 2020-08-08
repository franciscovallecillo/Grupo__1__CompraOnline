
const path = require('path')
const fs = require("fs")
// let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/products.json')))

// Se requiere la Base de Datos
const {Product} = require("../database/models");

// Se Trae a la tabla ( otra forma de hacerlo )
// const Producto = db.Productos;
// traer la tabla de usuarios


const adminController = {
    listadoAdmin:function(req,res){
        // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/products.json')));
        // let nombreUsuario = req.session.nombre;
        // let productosUsuario = [productos,nombreUsuario]
        // res.render(path.resolve(__dirname,"..","views","admin","misProductos"),{productosUsuario}) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.
        Product
        .findAll()
        .then(productos =>{
            //return res.send(platos)
            res.render(path.resolve(__dirname , '..','views','admin','misProductos') , {productos});
        })           
        .catch(error => res.send(error))
    },
    detalleAdmin:function(req,res){        
        // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/products.json')));
        // let productoId = req.params.id;
        // let nombreUsuario = req.session.nombre;
        // for ( let i = 0; i < productos.length ; i++){
        //     if ( productoId == productos[i].id){
        //         let mostrarProducto = productos[i];
        //         let productosUsuario = [mostrarProducto,nombreUsuario]
        //         res.render(path.resolve(__dirname,"..","views","admin","adminDetailProducto"),{productosUsuario});
        //     }
        // }
        Product
        .findByPk(req.params.id)

    
    },
    editAdmin:function(req,res){
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/products.json')));
        let productoId = req.params.id;
        let nombreUsuario = req.session.nombre;
        for ( let i = 0; i < productos.length ; i++){
            if ( productoId == productos[i].id){
                let mostrarProducto = productos[i];
                let productosUsuario = [mostrarProducto,nombreUsuario]
                res.render(path.resolve(__dirname,"..","views","admin","editProducto"),{productosUsuario});
            }
        }
    },

    editAdminSave: function(req,res){

        let idNumero = parseInt(req.params.id);

        let productoEditado = {
            id: idNumero,
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
            imagen: req.file ? req.file.filename : "",
            aceptacion: 'si'
        }    

        

        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/products.json')));
        let productoId = req.params.id;
        for ( let i = 0; i < productos.length ; i++){
            if ( productoId == productos[i].id){
                productos[i] = productoEditado
                let actualizar = JSON.stringify(productos,null,2);
                fs.writeFileSync(path.resolve(__dirname, '../models/products.json'),actualizar);
                res.redirect("/misProductos");
            }
        }

        
    },

    deleteAdmin:function(req,res){
        // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/products.json')));
        // let productoId = parseInt(req.params.id);
        // let nuevoJSON = [];
        // for ( let i = 0; i < productos.length ; i++){
        //     if ( productoId === productos[i].id){

                                                   
        //     } else {
        //         nuevoJSON.push(productos[i])
        //         let actualizar = JSON.stringify(nuevoJSON,null,2);
        //         fs.writeFileSync(path.resolve(__dirname, '../models/products.json'),actualizar);
        //     }
        // }
        Product
        .destroy({
            where:{
                id: req.params.id
            },
            force: true
        })
        .then(confirmacion => {
            res.redirect("/misProductos");
        })

    }
}


module.exports = adminController;
