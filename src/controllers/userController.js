const path = require("path");
const fs = require('fs');
const bcrypt = require('bcrypt');


const controlador = {
    profile: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/user.ejs"));        
    },

    profileEmpty: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/user2.ejs"));
    },

    formularioRegistro:(req,res)=>{
        res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"));
    },

    registro:(req,res)=>{
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/users.json'), {encoding: 'utf-8'}));

        let idNuevo = usuarios.length+1;

        let nuevoUsuario = {
            id: idNuevo,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            contraseña: bcrypt.hashSync(req.body.password,10)
        }

        usuarios.push(nuevoUsuario);

        usuariosJson = JSON.stringify(usuarios,null,2);

        fs.writeFileSync(path.resolve(__dirname, '../models/users.json'),usuariosJson);

        let usuarioRegistrado = nuevoUsuario;

        res.render(path.resolve(__dirname,"../views/user.ejs"), {usuarioRegistrado});
    },
    
    pageLogin: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/login.ejs"));
    },

    login: (req,res)=>{
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/users.json'), {encoding: 'utf-8'}));

        for ( let i = 0; i < usuarios.length ; i++){
            if ( req.body.email == usuarios[i].email){
                let usuarioRegistrado = usuarios[i];
                res.render(path.resolve(__dirname,"../views/user.ejs"), {usuarioRegistrado});
            }else{
                console.log("Usuario no encontrado");
            }
        }
    }
};

module.exports = controlador;