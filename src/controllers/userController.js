const path = require("path");
const fs = require('fs');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');



const controlador = {
    profile: (req,res)=>{
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/users.json'), {encoding: 'utf-8'}));
        for ( let i = 0; i < users.length ; i++){
            console.log("Chequeando usuario "+i);
            console.log("ID que busco "+req.session.idUser);
            if (req.session.idUser == users[i].id){
                let userDB = users[i];
                console.log(userDB);
                res.render(path.resolve(__dirname,"../views/user.ejs"), {userDB});
                //console.log("No deberia imprimir");
            };
        }
        //res.render(path.resolve(__dirname,"../views/user.ejs"), {userDB});        
    },

    profileEmpty: (req,res)=>{
        let productos = "nada"
        let nombreUsuario = req.session.nombre;
        let productosUsuario = [productos,nombreUsuario]
        res.render(path.resolve(__dirname,"../views/user2.ejs"),{productosUsuario})
    },

    formularioRegistro:(req,res)=>{
        let productos = "nada"
        let nombreUsuario = req.session.nombre;
        let productosUsuario = [productos,nombreUsuario]
        res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"),{productosUsuario});
    },

    registro:(req,res)=>{

        let errors = validationResult(req);

        if (errors.isEmpty()){

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
        } else {
            res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"), {errors: errors.errors});
        }
    },
    
    pageLogin: (req,res)=>{
        let productos = "nada"
        let nombreUsuario = req.session.nombre;
        let userDB = [productos,nombreUsuario]
        res.render(path.resolve(__dirname,"../views/login.ejs"),{userDB});
    },

    login: (req,res)=>{
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/users.json'), {encoding: 'utf-8'}));

        for ( let i = 0; i < usuarios.length ; i++){
            if ( req.body.email == usuarios[i].email){
                let usuarioRegistrado = usuarios[i];
                console.log(req.body.email);
                res.render(path.resolve(__dirname,"../views/user.ejs"), {usuarioRegistrado});
            }else{
                console.log(req.body.email);
                console.log("Usuario no encontrado");
            }
        }
    },
    login2: (req,res)=>{
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/users.json'), {encoding: 'utf-8'}));
        for (let i=0 ; i<usuarios.length ; i++){
            console.log(usuarios[i].email)
            if ( usuarios[i].email === req.body.email){
                console.log("paso por acá");
                
                let check = bcrypt.compareSync(req.body.password,usuarios[i].contraseña);
                console.log(check);
                if ( check === true){
                    console.log("te doy acceso a otra pagina");
                    req.session.log = "si";
                    req.session.nombre = usuarios[i].nombre;
                    req.session.idUser = usuarios[i].id;
                    res.redirect("/user");
                } else {
                    console.log("contraseña incorrecta");
                }

            } else {
                console.log("usuario no registrado")
             
            }
            break;
        }

    }
}


module.exports = controlador;