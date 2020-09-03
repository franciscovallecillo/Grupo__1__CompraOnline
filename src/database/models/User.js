
module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: dataTypes.STRING,
        apellido: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        usuario: dataTypes.STRING,
        avatar: dataTypes.STRING,
        dni: dataTypes.INTEGER,
        telefono: dataTypes.INTEGER,
        calle: dataTypes.STRING,
        altura: dataTypes.INTEGER,
        departamento: dataTypes.STRING,
        ciudad: dataTypes.STRING,
        provincia: dataTypes.STRING,
        cp: dataTypes.INTEGER,
        dniTitular: dataTypes.INTEGER,
        titularTarjeta: dataTypes.STRING,
        tarjeta: dataTypes.STRING,
        nroTarjeta: dataTypes.BIGINT,
        vencimiento: dataTypes.STRING
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

