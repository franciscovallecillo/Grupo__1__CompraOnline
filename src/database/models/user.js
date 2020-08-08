
module.exports = (sequelize, dataTypes) => {
    let alias = 'usuarios';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: dataTypes.STRING,
        apellido: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.INTEGER,
        avatar: dataTypes.INTEGER,
        dni: dataTypes.INTEGER,
        phone: dataTypes.INTEGER,
        calle: dataTypes.INTEGER,
        altura:dataTypes.INTEGER,
        apartment: dataTypes.STRING,
        ciudad: dataTypes.STRING,
        provincia: dataTypes.STRING,
        postalcode: dataTypes.INTEGER,

 

    };

    const usuarios = sequelize.define(alias, cols)
    usuarios.associate = function(models){
        usuarios.hasMany(
            models.Product,
            {
                as: 'producto',
                foreignKey: 'id'
            }
        )
    }   
    return usuarios
}

