const fs = require('fs');
const path = require('path');
const {Users} = require('../database/models');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
const { log } = require("console");

module.exports = (req,res,next) =>{
    console.log("000000000000000000000000000000000000000000000000000");
    console.log(req.session.usuario.id);
    console.log(req);
    console.log("000000000000000000000000000000000000000000000000000");
    Users.findOne({
        where: {
            id: req.session.usuario.id
        }
    }).then((resultado)=>{
        console.log("ACTUALIZADOOOOOOOOO"+JSON.stringify(resultado));
        res.locals.usuario = resultado;
    }).catch(error => console.log(error));
    return next();
}