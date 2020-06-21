const path = require("path");

const controlador = {
    favoritos: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/favoritos.ejs"));
    }
};

module.exports=controlador;