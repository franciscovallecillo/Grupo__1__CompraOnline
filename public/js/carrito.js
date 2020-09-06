

// const {Product} = require('../database/models');

window.addEventListener('load',function(){
    
    console.log("soy fran");


    let agregarCarrito = document.querySelector('#carritoFront');
    

    // let producto = localStorage.getItem("productoCarrito")
    // console.log(producto);

    agregarCarrito.addEventListener("click",function(){
        let nombre = prompt("como te llamas?")
        localStorage.setItem("productoCarrito", nombre)
        console.log(localStorage);
        // Product.findByPk(req.params.id)
        // .then((producto) => {
        //     console.log(producto);
        // })
        
     

    });
    

    // 
    //     localStorage.setItem("productoCarrito", req.params.id)
    //     console.log(localStorage);
    //     // let listaProductos = []
    //     // let contador = 0
    //     // contador = contador + 1
    //     // listaProductos.push(contador)
    // 

})
// 

// // LOCAL STORAGE ! .
// localStorage.setItem("productosCarrito", listaProductos)
// if ( localStorage.getItem ("productosCarrito") > 0){
//     document.querySelector(".cantProductosCarrito").innerHTML = "productosCarrito"
// }
// // EVENTO EN AGREGAR A MI CARRITO ...........> SUCEDEN ESTAS COSAS: 



// // Alameceno en la Variable, toda la base de datos
// let productos = Products.findAll()
// .then(resultado => {
//     console.log(resultado);
// })

// producto = {  // Para ir a la bas de datos vos necesitas el id y el resto de las cosas para mostrarle al usuario. 
//     id: 156465,
//     precio:10,
//     nombre: "camiseta"
// }

// listaProductos.push(producto)
// // ALMACENAR LA INFORMACIÓN EN EL LOCAL STORAGE. COMO STRING.... STRINGYFYYY ...... 



// // TOCO EN MI BOLSO PARA VER QUE TENGO EN EL BOLSO. 

// // EJS , LEVANTO LA INFORMACIÓN DEL LOCAL STORAGE, PASARLO A JSON PRIMERO Y LUEGO RECORRER PARA VER LOS PRODUCTOS. 


// })