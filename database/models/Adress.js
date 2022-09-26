const { config } = require("../../.sequelizerc")

module.exports = function(sequelize, DataTypes) {
    let alias = "Address"
    let cols = {
        idEnderecoPrincipal: {
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoincrement: true,
            unique: true
        },
        rua: {
            type: DataTypes.STRING
        },
        numero: {
            type: DataTypes.INTERGER
        },
        bairro: {
            type: DataTypes.STRING
        },
        cidade: {
            type: DataTypes.STRING
        },
        cep: {
            type: DataTypes.INTERGER
        }
    }

    let config = {
        tableName: "address",
        timestamps: false
    }

    let Client = sequelize.define(alias, cols, config)

    Address.associate = function(models) {
        Address.belongs(models.Client, {
            as: "Endereço_Cliente",
            foreignKey: "endereço_idEnderecoPrincipal"
        })
    }

    return Address
}