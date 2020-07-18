const path = require("path");

const controlador = {
    misCompras: (req,res)=>{
        let productos = "nada"
        let nombreUsuario = req.session.nombre;
        let productosUsuario = [productos,nombreUsuario]
        res.render(path.resolve(__dirname,"../views/misCompras.ejs"),{productosUsuario});
    }
};

module.exports=controlador;