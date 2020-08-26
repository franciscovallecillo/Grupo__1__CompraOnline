


window.addEventListener('load',function(){
    

    let formulario = document.querySelector('#formProductoJs')

    
       
    formulario.addEventListener('submit',function(evento){

        let ulErrores = document.querySelector("#erroresJs");
        ulErrores.innerHTML=""

        let {marca, descripcion, imagen} = formulario.elements;

 

        let extension = imagen.value.toLowerCase()



        errores = [];

        if ( marca.value.length < 5 ){
            errores.push("La marca debe tener al menos 5 caracteres")
        }
    
        if ( descripcion.value.length < 20 ){
            errores.push("La descripcion debe tener al menos 20 caracteress")
        }
       
        
        if ( extension.endsWith(".jpg")  || extension.endsWith(".jpeg") || extension.endsWith(".png") || extension.endsWith(".gif") ){
            console.log(extension.endsWith(".jpg"))
        } else{
            errores.push("La Imagen de debe tener alguna de estas extensiones .JPG .JPEG .PNG .GIF")

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



