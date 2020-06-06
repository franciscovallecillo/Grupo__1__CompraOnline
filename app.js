const express = require('express');   // Modulos internos los importo sin barra. 
const app = express();


app.set('view engine','ejs')   // Le digo a la aplicación que usare el motor de plantillas de ejs. 
app.use(express.static('public'));   // Todos los archivos de acá son accesibles desde afuera, del front. 

app.listen(8000, () => {    
    console.log('Servidor arranco correctamente en el puerto 8000.')
})

// Se requiere el archivo donde esta la ruta
const rutasProductos = require('./src/routes/productosRoutes.js')
const home = require('./src/routes/homeRoutes.js')

// Registro las rutas principales.
app.use(home);
app.use(rutasProductos);
                                    // Todas las url que le sigan a / producto van a estar acá


