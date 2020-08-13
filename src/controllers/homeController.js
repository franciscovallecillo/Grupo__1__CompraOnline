const path = require('path')
const fs = require('fs')

// let platos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/platos.json')))

let productos = ['cpu','teclado']


module.exports = {
    vistaPrincipal: function(req,res){
        console.log('hola')
        // res.render(path.resolve(__dirname,'..','views','index'),{platos:platos})
        // res.render(path.resolve(__dirname,'..','views','index')) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.
    },
    vistaMasInfo: function(req,res){
        let productosUsuario = {
            idUser: req.session.id,
            nombre: req.session.nombre
        };
        res.render(path.resolve(__dirname,'..','views','index'), {productosUsuario}) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.

        // Renderizo el html index y listado productos. 
        // res.render('hola')
    }
}


// module.exports = home;