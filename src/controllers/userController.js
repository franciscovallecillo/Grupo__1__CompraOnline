const path = require("path");

const controlador = {
    profile: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/user.ejs"));
    },
    login:(req,res)=>{
        res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"));
    },
};

module.exports = controlador;