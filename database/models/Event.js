const { config } = require("../../.sequelizerc")
const Genre = require("./Genre")

module.exports = function(sequelize, DataTypes) {
    let alias = "Events"
    let cols = {
        idEvento: {
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoincrement: true
        },
        evento: {
            type: DataTypes.STRING
        },
        foto: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: "events",
        timestamps: false
    }

    let Events = sequelize.define(alias, cols, config)

    Events.associate = function(models) {
        Events.belongsToMany(models.EventAddress, {
            as: "Nome do Evento",
            through: "event_has_eventAddress",
            foregnKey: "eventos_idEvento",
            otherKey: "enderecoEvento_idEvento",
            timestamps: false
        }),

        Event.belongsToMany(models.Clients, {
            as: "Client_Events",
            through: "TBClientes_has_events",
            foregnKey: "TBClientes_idClient",
            otherKey: "events_idEvento",
            timestamps: false
    })
        Event.belongs(models.Genre, {
            as: "Contatos_Cliente",
            foreignKey: "idGenero"
    })
    }

    return Events
}