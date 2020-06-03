const path = require('path')

const productosControler = {
    // listado: function(){
    //     res.render(path.resolve(__dirname,'..','views','productos','listaProductos')) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.
    // },
    detalle: function(){
        console.log('Excelentes productos')
    },
    idSelectionado :function(req,res){
        let urlId = req.params.id
        res.send(urlId)
    },
    detalleProductos:function(req,res){
        res.render(path.resolve(__dirname,'..','views','productos','listaProductos')) // Otra forma de ir al archivo. path resolve, para no tener confilcto sea cual sea el sistema operativo.

    }
    
    



}

module.exports = productosControler;