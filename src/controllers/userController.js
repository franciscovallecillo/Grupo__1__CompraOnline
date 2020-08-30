const path = require("path");
const fs = require('fs');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
const { log } = require("console");
const {Users} = require('../database/models');



const controlador = {
    profile: (req,res)=>{

        //DB

        Users.findByPk(req.session.idUser)
        .then((productosUsuario)=>{
            console.log('VARIABLE '+productosUsuario.dataValues.nombre);
            res.render(path.resolve(__dirname,"../views/user.ejs"), {productosUsuario});
        }).catch(error => console.log(error));

        //JSON

        /*let users = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/users.json'), {encoding: 'utf-8'}));
        for ( let i = 0; i < users.length ; i++){
            console.log("Chequeando usuario "+i);
            console.log("ID que busco "+req.session.idUser);
            if (req.session.idUser == users[i].id){
                let productosUsuario = users[i];
                console.log(productosUsuario);
                res.render(path.resolve(__dirname,"../views/user.ejs"), {productosUsuario});
                //console.log("No deberia imprimir");
            };
        }*/
        //res.render(path.resolve(__dirname,"../views/user.ejs"), {userDB});
    },

    profileUpdate: (req,res)=>{

        //DB

        Users.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            avatar: req.files ? req.files[0].filename : 'avatarEmpty.jpg',
            usuario: req.body.usuario,
            dni: req.body.dni,
            telefono: req.body.telefono,
            calle: req.body.calle,
            altura: req.body.altura,
            dpto: req.body.dpto,
            ciudad: req.body.ciudad,
            provincia: req.body.provincia,
            cp: req.body.cp,
            titularTarjeta: req.body.titularTarjeta,
            dniTitular: req.body.dniTitular,
            tarjeta: req.body.tarjeta,
            nroTarjeta: req.body.nroTarjeta,
            vencimiento: req.body.vencimiento
        },
        {
            where: {
                id: req.session.idUser
            }
        });
        
        res.redirect('/user/'+req.params.id);

        //JSON

        //let errors = validationResult(req);
        
        //if (errors.isEmpty()){
            /*console.log(req);

            let users = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/users.json'), {encoding: 'utf-8'}));

            for (let i = 0; i < users.length; i++) {
                if (req.session.idUser==users[i].id) {
                    let pass = users[i].contraseña;
                    users[i] = {
                        id: req.session.idUser,
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        contraseña: pass,
                        avatar: req.files[0].filename,
                        usuario: req.body.usuario,
                        dni: req.body.dni,
                        telefono: req.body.telefono,
                        calle: req.body.calle,
                        altura: req.body.altura,
                        dpto: req.body.dpto,
                        ciudad: req.body.ciudad,
                        provincia: req.body.provincia,
                        cp: req.body.cp,
                        titularTarjeta: req.body.titularTarjeta,
                        dniTitular: req.body.dniTitular,
                        tarjeta: req.body.tarjeta,
                        nroTarjeta: req.body.nroTarjeta,
                        vencimiento: req.body.vencimiento
                    }

                    let productosUsuario = users[i];

                    usuariosJson = JSON.stringify(users,null,2);

                    fs.writeFileSync(path.resolve(__dirname, '../models/users.json'),usuariosJson);

                    res.render(path.resolve(__dirname,"../views/updateSuccessful.ejs"), {productosUsuario});
                }
                
            }*/

        //} else {
            //res.render(path.resolve(__dirname,"../views/user.ejs"), {errors: errors.errors});
        //}
    },

    formularioRegistro:(req,res)=>{
        let productos = "nada";
        let nombreUsuario = req.session.nombre;
        let productosUsuario = [productos,nombreUsuario];
        res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"),{productosUsuario});
    },

    registro:(req,res)=>{

        //DB

        let errors = validationResult(req);

        if(errors.isEmpty()){
            Users.findOne({
                where: {
                    email: req.body.email
                }
            }).then((resultado)=>{
                if(resultado==null){
                    Users.create({
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password,10)
                    }).then(
                        res.redirect("/login")
                    ).catch(error => console.log(error));
                }else{
                    res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"), {errors: resultado.email+' ya existe'});
                }
                //console.log("SOY EL RESULTADO "+resultado.email+" HASTA ACA");
            }).catch(error => console.log(error));
        }else{
            return res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"),{errors: errors.errors})
        }

        /*Users.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10)
        }).then(
            res.redirect("/login")
        ).catch(error => console.log(error));*/


        //JSON

        /*let errors = validationResult(req);

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

            let productosUsuario = nuevoUsuario;

            res.render(path.resolve(__dirname,"../views/user.ejs"), {productosUsuario});
        } else {
            res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"), {errors: errors.errors});
        }*/
    },
    
    pageLogin: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/login.ejs"));
    },

    /*login: (req,res)=>{
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
    },*/

    login: (req,res)=>{
        
        //DB

        let errors = validationResult(req);

        if(errors.isEmpty()){

            Users.findOne({
                where: {
                    email: req.body.email
                }
            }).then((resultado)=>{
                if(resultado==null){
                    res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"), {errors: "E-mail inexistente. ¡Podes registrarte aqui!"});
                }else if(bcrypt.compareSync(req.body.password, resultado.password)){
                    req.session.log = "si";
                    req.session.nombre = resultado.nombre;
                    req.session.idUser = resultado.id;
                    res.redirect("/user/"+resultado.id);
                } else {
                    res.render(path.resolve(__dirname,"../views/login.ejs"), {errors: "Contraseña invalida"});
                }
            }).catch(error => console.log(error));
        }else{
            res.render(path.resolve(__dirname,"../views/login.ejs"), {errors: errors.errors});
        }

        //JSON

        /*let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../models/users.json'), {encoding: 'utf-8'}));

        let errors = validationResult(req);

        if (errors.isEmpty()){
            for (let i=0 ; i<usuarios.length ; i++){
                if ( usuarios[i].email === req.body.email){
                    console.log("paso por acá");
                    
                    let check = bcrypt.compareSync(req.body.password,usuarios[i].contraseña);
                    console.log(check);
                    if ( check === true){
                        console.log("te doy acceso a otra pagina");
                        req.session.log = "si";
                        req.session.nombre = usuarios[i].nombre;
                        req.session.idUser = usuarios[i].id;
                        res.redirect("/user/:idUser");
                    } else {
                        console.log("contraseña incorrecta");
                        res.redirect("/login");
                    }
                }
            }
            console.log("usuario no registrado");
            res.redirect("/login");
        } else {
            res.render(path.resolve(__dirname,"../views/formularios/login.ejs"), {errors: errors.errors});
        }*/
    },

    logout: (req,res)=>{
        req.session.log = "no";
        req.session.nombre = null;
        req.session.idUser = null;
        res.redirect("/home");
    },

    deletePage: (req,res)=>{
        let productosUsuario = {
            id: req.session.idUser,
            nombre: req.session.nombre
        };
        res.render(path.resolve(__dirname,"../views/delete.ejs"), {productosUsuario});
    },

    delete: (req,res)=>{
        Users.destroy({
            where: {
                id: req.session.idUser
            }
        });

        req.session.idUser = undefined;
        req.session.log = "no";

        res.redirect('/home');
    }
}


module.exports = controlador;