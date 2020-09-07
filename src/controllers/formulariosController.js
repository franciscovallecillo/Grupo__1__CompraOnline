const path = require('path');
const fs = require("fs");
const { response } = require('express');
const {check, validationResult, body} = require('express-validator');

// let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/products.json')))

// Se requiere la Base de Datos
const {Product, Users} = require("../database/models");

// const { create } = require('domain');


const formularioCarga = {

    show:(req,res) => {
        let productos = "nada"
        let nombreUsuario = req.session.nombre;
        let productosUsuario = [productos,nombreUsuario]
        res.render(path.resolve(__dirname,"..","views","formularios", "cargaProducto"),{productosUsuario}) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.
    },
    carga:(req,res) => {

        let email = req.session.usuario.id
        console.log(email);
        // Users.findOne(email)
        // .then((resultado) =>{
        //     console.log(resultado);
        // })

        let errors = validationResult(req);


        if(errors.isEmpty()){

      
            

            Product
            .create({



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
                imagen: req.file ? req.file.filename : '' ,
                categoria: req.body.categoria,
                id: email
            })
        
            res.redirect('/misProductos');
        }else{
          
            res.render(path.resolve(__dirname,"../views/formularios/cargaProducto.ejs"), {errors: errors.errors});
        }
    }

    
};

module.exports = formularioCarga;