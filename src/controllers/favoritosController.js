const path = require("path");

const controlador = {
    favoritos: (req,res)=>{
        let productos = "nada"
        let nombreUsuario = req.session.nombre;
        let productosUsuario = [productos,nombreUsuario]
        res.render(path.resolve(__dirname,"../views/favoritos.ejs"),{productosUsuario});
    }
};

module.exports=controlador;