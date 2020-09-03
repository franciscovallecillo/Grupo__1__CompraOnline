const path = require("path");
const fs = require('fs');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
const { log } = require("console");
const {Users} = require('../database/models');



const controlador = {
    profile: (req,res)=>{

        //DB

        Users.findByPk(req.session.usuario.id)
        .then(()=>{
            //console.log('MOSTRANDO USUARIO');
            res.render(path.resolve(__dirname,"../views/user.ejs"));
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

        console.log("USUARIO ID: "+req.session.usuario.id);
        console.log("REQ FILES: "+JSON.stringify(req.files));

        Users.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            avatar: req.file ? req.file.filename : 'avatarEmpty.jpg',
            usuario: req.body.usuario ? req.body.usuario : null,
            dni: req.body.dni ? req.body.dni : null,
            telefono: req.body.telefono ? req.body.telefono : null,
            calle: req.body.calle ? req.body.calle : null,
            altura: req.body.altura ? req.body.altura : null,
            dpto: req.body.dpto ? req.body.dpto : null,
            ciudad: req.body.ciudad ? req.body.ciudad : null,
            provincia: req.body.provincia ? req.body.provincia : null,
            cp: req.body.cp ? req.body.cp : null,
            titularTarjeta: req.body.titularTarjeta ? req.body.titularTarjeta : null,
            dniTitular: req.body.dniTitular ? req.body.dniTitular : null,
            tarjeta: req.body.tarjeta ? req.body.tarjeta : null,
            nroTarjeta: req.body.nroTarjeta ? req.body.nroTarjeta : null,
            vencimiento: req.body.vencimiento ? req.body.vencimiento : null
        },
        {
            where: {
                id: req.session.usuario.id
            }
        }).catch(error => console.log(error));
        
        res.redirect('/updateSuccessful');

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

    updateSuccessful: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/updateSuccessful.ejs"));
    }
    ,

    formularioRegistro:(req,res)=>{
        res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"));
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
        res.locals.usuario = false;

        if(errors.isEmpty()){

            Users.findOne({
                where: {
                    email: req.body.email
                }
            }).then((resultado)=>{
                //console.log("Tengo la variable: "+JSON.stringify(resultado));
                if(resultado===null){
                    res.render(path.resolve(__dirname,"../views/formularios/altaUsuario.ejs"), {errors: "E-mail inexistente. ¡Podes registrarte aqui!"});
                }else if(bcrypt.compareSync(req.body.password, resultado.password)){
                    //console.log("Compare contraseñas y pase");
                    req.session.usuario = resultado;
                    res.locals.usuario = req.session.usuario;
                    //console.log("Variable LOCALLLLLLSSSSSS: "+JSON.stringify(res.locals.usuario));
                    req.body.recordarme ? res.cookie('email',resultado.email,{maxAge: 1000 * 60 * 60 * 24}) : console.log("No se recuerda");
                    //req.session.nombre = resultado.nombre;
                    //req.session.idUser = resultado.id;
                    res.redirect("/user/"+req.session.usuario.id);
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
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect("/home");
    },

    deletePage: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/delete.ejs"));
    },

    delete: (req,res)=>{
        Users.destroy({
            where: {
                id: req.session.usuario.id
            }
        });

        req.session.usuario = undefined;

        res.redirect('/home');
    }
}


module.exports = controlador;