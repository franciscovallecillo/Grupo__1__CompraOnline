
module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {type: dataTypes.STRING},
        apellido: {type: dataTypes.STRING},
        email: {type: dataTypes.STRING},
        password: {type: dataTypes.STRING},
        avatar: {type: dataTypes.STRING},
        dni: {type: dataTypes.INTEGER},
        phone: {type: dataTypes.INTEGER},
        calle: {type: dataTypes.INTEGER},
        altura:{type: dataTypes.INTEGER},
        apartment: {type: dataTypes.STRING},
        ciudad: {type: dataTypes.STRING},
        provincia: {type: dataTypes.STRING},
        postalcode: {type: dataTypes.INTEGER}
    };
    let config = {
        tableName: "users",
        timestamps: false
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.hasMany(
            models.Product,
            {
                as: 'productos',
                foreignKey: 'id'
            }
        )
    };

    return Usuario;
}

