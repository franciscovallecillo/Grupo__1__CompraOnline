const path = require("path");
const fs = require('fs');
const bcrypt = require('bcrypt');


const controlador = {
    profile: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/user.ejs"));        
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
        let productos = "nada"
        let nombreUsuario = req.session.nombre;
        let productosUsuario = [productos,nombreUsuario]
        res.render(path.resolve(__dirname,"../views/login.ejs"),{productosUsuario});
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
                console.log("paso por acá")
                
                let check = bcrypt.compareSync(req.body.password,usuarios[i].contraseña)
                console.log(check);
                if ( check === true){
                    console.log("te doy acceso a otra pagina");
                    req.session.log = "si"
                    req.session.nombre = usuarios[i].nombre
                    res.redirect("/user2")
                } else {
                    console.log("contraseña incorrecta");
          
                }

            } else {
                console.log("usuario no registrado")
             
            }
        }

    }
}


module.exports = controlador;