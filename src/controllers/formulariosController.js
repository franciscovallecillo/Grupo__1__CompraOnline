const path = require('path')
const fs = require("fs")
const { response } = require('express');
let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/products.json')))



const formularioCarga = {
    show:(req,res) => {
        res.render(path.resolve(__dirname,"..","views","formularios", "cargaProducto")) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.
    },
    carga:(req,res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/products.json')));
        let IDagregar = productos[productos.length -1].id + 1
        
        let productoNuevo = {
            id: IDagregar,
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
        productos.push(productoNuevo);
        productosJSON = JSON.stringify(productos,null,2);
        fs.writeFileSync(path.resolve(__dirname, '../models/products.json'),productosJSON);
        res.redirect('/cargaProducto');
    }
    
};

module.exports = formularioCarga;