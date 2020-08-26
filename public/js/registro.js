
window.addEventListener('load',function(){
    
   
    let formulario = document.querySelector('#formulario')

       
    formulario.addEventListener('submit',function(evento){

        let {nombre, apellido, email, password} = formulario.elements;

        let checkEmail = email.value
        let cantidad = 0        
        for (let i = 0; i < checkEmail.length; i++) {
            if ( checkEmail[i] === "@" || checkEmail[i] === "." ){
                cantidad+=1
            }         
        }

        errores = [];

        if ( nombre.value.length < 2 ){
            
            errores.push("El nombre debe tener mas de 2 caracteres")
            console.log(nombre);
        }

        if ( apellido.value.length < 2 ){
            errores.push("El apellido debe tener mas de 2 caracteres")
        }

        if ( email.value.length < 3 && cantidad < 2 ){
            errores.push("Mail invalido")
        }
    
        if ( password.value.length < 8 ){
            errores.push("Constraseña debe tener minimo 8 caracteres")
        }

        if ( errores.length > 0){
            evento.preventDefault();        

            let ulErrores = document.querySelector("#erroresJs");

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"               
            }
        }
    


});


    
});



