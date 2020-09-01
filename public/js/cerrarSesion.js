

window.addEventListener('onload',function(){
    // Capturo del Formulario
    let cerrarSesion = document.querySelector('.')
    
    cerrarSesion.addEventListener('click',function(e){

        let confirmacion = confirm("¿Esta seguro que quiere salir?")
            if ( confirmacion == true ){
               //  window.location // res.render ??
            } else {
                res.render("/productos")
            }
    });
    
    
});