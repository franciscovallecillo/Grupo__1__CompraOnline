//**Middleware controlo el acceso del usuario usando Sequelize**/

const fs = require('fs');
const path = require('path');

//------- Sequelize ----------------//

const {Users} = require('../database/models');
  


module.exports = (req,res,next) =>{

    res.locals.usuario = false;
    //console.log('Sesion de HOLAAAAAAAAAAAAA: '+ req.session.usuario.email);
    if(req.session.usuario){
        //console.log('Sesion de: '+ req.session.usuario.email);
        res.locals.usuario = req.session.usuario;
        //console.log("LOCALSSSSSSSSSSSSS: "+JSON.stringify(res.locals.usuario));
        return next();
    }else if(req.cookies.email){
        Users.findOne({
            where: {
               email: req.cookies.email
            }
        })
        .then(user =>{
            req.session.usuario = user;
            res.locals.usuario = user;
            return next();
        })           
    }else{
        return next();
    }
};