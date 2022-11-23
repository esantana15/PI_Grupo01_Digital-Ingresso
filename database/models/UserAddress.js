const { sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
    const UserAddress = sequelize.define('UserAddress', {
        idUserAddress:{
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
            tableName: 'usuario_endereco',
            timestamps: false
        })

        // UserAddress.associate = (models) =>{
        //     UserAddress.belongsTo(models.UserRegister, {
        //         foreignKey: 'usuario_id',
        //         as: 'usuario'
        //         })
        //     }
    UserAddress.sync({ alter: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return UserAddress;
}