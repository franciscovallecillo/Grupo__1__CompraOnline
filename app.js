const express = require('express');   // Modulos internos los importo sin barra. 
const app = express();
const path = require('path');


app.set('view engine','ejs')   // Le digo a la aplicación que usare el motor de plantillas de ejs. 
// Todos los archivos de acá son accesibles desde afuera, del front. 
app.use(express.static((__dirname,'public'))) 

app.listen(8000, () => {    
    console.log('Servidor arranco correctamente en el puerto 8000.')
})

// Se requiere el archivo donde esta la ruta
const rutasProductos = require('./src/routes/productosRoutes.js')
const home = require('./src/routes/homeRoutes.js')
const user = require("./src/routes/userRoutes.js");
const carrito = require("./src/routes/carritoRoutes.js");
const cargaProducto = require("./src/routes/formulariosRoutes.js");
const favoritos = require("./src/routes/favoritosRoutes.js");
const misCompras = require("./src/routes/misComprasRoutes.js")


// // Registro las rutas principales.
app.use(home);
app.use(rutasProductos);
app.use(user);
app.use(carrito);
app.use(cargaProducto);
app.use(favoritos);
app.use(misCompras);

// app.use('/home',home)

// app.use('/productos',rutasProductos)   

console.log("hola")
                                                              
