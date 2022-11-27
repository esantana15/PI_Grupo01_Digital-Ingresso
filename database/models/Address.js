const { sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rua: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        complemento: {
            type: DataTypes.STRING(100)
          },
        bairro: {
            type: DataTypes.STRING(100)
          },
        estado: DataTypes.STRING,
        pais: DataTypes.STRING,
        cep: DataTypes.INTEGER,
        usuario_id: {
            type: DataTypes.INTEGER
          },
        },{
            tableName: 'address',
            timestamps: false
        })

        // Address.associate = (models) =>{
        //     Address.belongsTo(models.User, {
        //         foreignKey: 'usuario_id',
        //         as: 'usuario'
        //         })
        //     }

    // Address.sync({ force: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return Address;
}