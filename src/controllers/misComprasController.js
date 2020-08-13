const path = require("path");

const controlador = {
    misCompras: (req,res)=>{
        let productosUsuario = {
            id: req.session.idUser,
            nombre: req.session.nombre
        };
        res.render(path.resolve(__dirname,"../views/misCompras.ejs"),{productosUsuario});
    }
};

module.exports=controlador;