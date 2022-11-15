const Events = require('./Events')
module.exports = function(sequelize, DataTypes) {
    let alias = "EventAddress";
    let cols = {
        idEventAddress: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cidadeEvento: {
            type: DataTypes.STRING
        },
        ruaEvento: {
            type: DataTypes.STRING
        },
        bairroEvento: {
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
        },
    }
    let config = {
        tableName: "EventAddress",
        timestamps: false
    }

    let EventAddress = sequelize.define(alias, cols, config);

    EventAddress.associate = function(models) {
        EventAddress.belongsToMany(models.Events, {
            as: "Eventos",
            through: "Event_Address",
            foreignKey: "address_Id",
            otherKey: "events_Id",
            timestamps: false
        })
    }


    EventAddress.sync({ alter: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return EventAddress;
}