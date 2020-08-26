
window.addEventListener('load',function(){

    let formulario = document.querySelector('#formularioJs')
 console.log(formulario);
       
    formulario.addEventListener('submit',function(evento){

        let {email, password} = formulario.elements;

        let checkEmail = email.value
        let cantidad = 0        
        for (let i = 0; i < checkEmail.length; i++) {
            if ( checkEmail[i] === "@" || checkEmail[i] === "." ){
                cantidad+=1
            }         
        }

    errores = [];

    if ( email.value.length < 3 && cantidad < 2 ){
        errores.push("Ingrese correo")
    }

    if ( password.value.length < 8 ){
        errores.push("Recuerde que la contraseña debe tener al menos 8 caracteres")
    }


    if ( errores.length > 0){
        evento.preventDefault();        

        let ulErrores = document.querySelector("#erroresJs");

        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"               
        }
    }
    
})




})
