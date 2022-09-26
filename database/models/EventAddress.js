const { config } = require("../../.sequelizerc")

module.exports = function(sequelize, DataTypes) {
    let alias = "EventAddress"
    let cols = {
        idEndEvento: {
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoincrement: true,
            unique: true
        },
        cidadeEvento: {
            type: DataTypes.STRING
        },
        localEvento: {
            type: DataTypes.STRING
        },
        horaEvento: {
            type: DataTypes.STRING
        },
        dataEvento: {
            type: DataTypes.STRING
        }
        
    }

    let config = {
        tableName: "eventAddress",
        timestamps: false
    }

    let EventAddress = sequelize.define(alias, cols, config)

    EventAddress.associate = function(models) {
        EventAddress.belongsToMany(models.Events, {
            as: "Endereço do Evento",
            through: "event_has_eventAddress",
            foregnKey: "eventos_idEvento",
            otherKey: "enderecoEvento_idEvento",
            timestamps: false
        })
    }

    return EventAddress
}