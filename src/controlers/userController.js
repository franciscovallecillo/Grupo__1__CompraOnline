const path = require("path");

const controlador = {
    profile: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/user.ejs"));
    },
};

module.exports = controlador;