

let cerrarSesion = document.querySelector('#cerrarSesionJs')

cerrarSesion.addEventListener('click',function(e){

let confirmacion = confirm("¿Esta seguro que quiere salir?")
if ( confirmacion == true ){
    res.render("/home")
} else {
    res.redirect("/user/"+req.session.usuario.id);
}


})

   //  window.location // res.render ??

// window.addEventListener('onload',function(){
//     // Capturo del Formulario
//     console.log("hola monica");


//     let cerrarSesion = document.querySelector('#cerrarSesionJs')
//     console.log(cerrarSesion);
//     cerrarSesion.addEventListener('click',function(e){

//         let confirmacion = confirm("¿Esta seguro que quiere salir?")
//             if ( confirmacion == true ){
//                //  window.location // res.render ??
//             } else {
//                 res.render("/home")
//             }
//     });
    
    
// });