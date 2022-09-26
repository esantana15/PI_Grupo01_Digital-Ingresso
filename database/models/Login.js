const { config } = require("../../.sequelizerc")

module.exports = function(sequelize, DataTypes) {
    let alias = "Client"
    let cols = {
        idClient: {
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoincrement: true,
            unique: true
        },
        usuario: {
            type: DataTypes.STRING
        },
        senha: {
            type: DataTypes.STRING
        }
        
        
    }

    let config = {
        tableName: "Login",
        timestamps: false
    }

    let Login = sequelize.define(alias, cols, config)

    Login.associate = function(models) {
            Client.belongs(models.Client, {
                as: "Login_Cliente",
                foreignKey: "TBLogin_id"
            })
        }

    return Login
}