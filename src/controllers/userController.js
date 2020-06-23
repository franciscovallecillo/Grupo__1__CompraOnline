const path = require("path");

const controlador = {
    profile: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/user.ejs"));
    },
    registro:(req,res)=>{
        res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"));
    },
    login: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/login.ejs"));
    },
};

module.exports = controlador;