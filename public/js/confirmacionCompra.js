

window.addEventListener('load',function(){
    
    
      let compra = document.querySelector("#botonCompraJs")

    compra.addEventListener('click',function(){

        if ( localStorage.getItem("numeroCompras") === null){

            localStorage.setItem("numeroCompras", 0)
            alert("SU COMPRA HA SIDO REALIZADA!!!" + " " + "N° de Orden" + " " + 0);
                   
        } else {

            let orden = localStorage.getItem("numeroCompras")
            let ordenNumero = parseInt(orden);
            let compra = ordenNumero + 1
           
            alert("SU COMPRA HA SIDO REALIZADA!!!" + " " + "N° de Orden" + " " + compra);
            localStorage.setItem("numeroCompras", compra)

        }

       

     
        
        
        
        // contador++;

        
        // let totalVentas = []
        // let contadorSegundo = 1;
        // totalVentas.push(contadorSegundo);
        // let totales = totalVentas.length
        // console.log("claudia");

        // let ventas = 0
        // ventas = ventas +=1
        // console.log(ventas);
        // console.log("monica");

  


    })

})

// window.addEventListener('onload',function(){

//     console.log("me llamo Mariaa")

// let alerta = alert("Su compra a sido realizada!!!");
// console.log(alerta);


//     // contador = 0


//     // Capturo del Formulario
//     // let compra = document.querySelector('#botonCompraJs"')
//     // console.log("hola");
//     // console.log(compra);
//     // compra.addEventListener('click',function(e){

//     //     let confirmacion = alert("Su compra a sido realizada!!!" + contador)

//     //            //  window.location // res.render ??
//     //            contador ++
//     //            res.send("Su compra a sido realizada!!!" + contador)

//     // });
    
    
// });