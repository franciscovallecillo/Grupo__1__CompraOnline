const path = require("path");

const controlador = {
    misCompras: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/misCompras.ejs"));
    }
};

module.exports=controlador;