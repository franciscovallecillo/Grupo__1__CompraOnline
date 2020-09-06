const path = require("path");

// Se requiere la Base de Datos
const {Product} = require("../database/models");

const controlador = {
    favoritos: (req,res)=>{
        let productosUsuario = {
            id: req.session.idUser,
            nombre: req.session.nombre
        };
        res.render(path.resolve(__dirname,"../views/favoritos2.ejs"),{productosUsuario});
    },
    showFavoritos: function (req,res) {

 

        let todosFavoritos = []
        let productoFavorito = req.params.id
        todosFavoritos.push(productoFavorito)

        Product.findByPk(req.params.id)      
        .then((productoDetalle) => {
            res.render(path.resolve(__dirname,"..","views","favoritos"),{productoDetalle})
            res.render(path.resolve(__dirname,"..","views", "partials","primerDivGeneral"),{productoDetalle})
        })
        
        
    },
    seleccionados: function(req,res){
        console.log("hola soy monica");
        for (let i = 0; i < todosFavoritos.length; i++) {
            let productos = todosFavoritos[i];
        };
        res.render(path.resolve(__dirname,"..","views","favoritos"),{productos})
    }

};

module.exports=controlador;