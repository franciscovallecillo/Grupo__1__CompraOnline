
module.exports = function (sequelize, dataTypes ) {
    let alias = "Product";

    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca: dataTypes.STRING,
        precio: dataTypes.DECIMAL,
        cantidad: dataTypes.INTEGER,
        resumen: dataTypes.STRING,
        descripcion: dataTypes.STRING,
        imagen: dataTypes.STRING,
        modelo: dataTypes.STRING,
        genero: dataTypes.STRING,
        temporada: dataTypes.STRING,
        talle: dataTypes.STRING,
        color: dataTypes.STRING,
        categoria: dataTypes.STRING,
    };
    
    // Esto no hace falta si a la tabla le pongo el updateAd,deleteAd,creatAd y se respeta el nombre de la tabla
    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config)
    Product.associate = function(models) {
        Product.belongsTo(
            models.Users,
            {
                as : 'users',
                foreignKey: 'id'
            }
        )
    };

    return Product;

};