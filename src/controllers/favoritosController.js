const path = require("path");

const controlador = {
    favoritos: (req,res)=>{
        let productosUsuario = {
            id: req.session.idUser,
            nombre: req.session.nombre
        };
        res.render(path.resolve(__dirname,"../views/favoritos.ejs"),{productosUsuario});
    }
};

module.exports=controlador;