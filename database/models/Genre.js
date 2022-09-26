const { config } = require("../../.sequelizerc")

module.exports = function(sequelize, DataTypes) {
    let alias = "Genre"
    let cols = {
        idGenero: {
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoincrement: true
        },
        genero: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: "genre",
        timestamps: false
    }

    let Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models) {
        Contacts.belongs(models.Event, {
            as: "Contatos_Cliente",
            foreignKey: "idEvento"
        })
    } 

        
    }

    return Genre
