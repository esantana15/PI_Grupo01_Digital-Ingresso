const { config } = require("../../.sequelizerc")

module.exports = function(sequelize, DataTypes) {
    let alias = "Contacts"
    let cols = {
        idContacts: {
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoincrement: true
        },
        celular: {
            type: DataTypes.INTERGER
        },
        email: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: "contacts",
        timestamps: false
    }

    let Contacts = sequelize.define(alias, cols, config)

    Contacts.associate = function(models) {
        Contacts.belongs(models.Client, {
            as: "Contatos_Cliente",
            foreignKey: "idContact"
        })
    }   

    return Contacts
}