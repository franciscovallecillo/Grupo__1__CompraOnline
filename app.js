const express = require('express');   // Modulos internos los importo sin barra. 
const rutasProductos = require('./src/routes/productos.js')
const home = require('./src/routes/home.js')
const app = express();

app.set('view engine','ejs')   // Le digo a la aplicación que usare el motor de plantillas de ejs. 
app.use(express.static((__dirname,'public')))   // Todos los archivos de acá son accesibles desde afuera, del front. 

app.listen(8000, () => {
    
    console.log('Servidor arranco correctamente en el puerto 8000.')
})

// Registro las rutas principales.


app.use('/home',home)

app.use('/productos',rutasProductos)   
                                    // Todas las url que le sigan a / producto van a estar acá


