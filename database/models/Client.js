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
        nome: {
            type: DataTypes.STRING
        },
        sobrenome: {
            type: DataTypes.STRING
        },
        dataNascimento: {
            type: DataTypes.DATE
        },
        CPF: {
            type: DataTypes.INTERGER
        },
        sexo: {
            type: DataTypes.STRING
        },
        foto: {
            type: DataTypes.STRING
        }
        
        
    }

    let config = {
        tableName: "eventos",
        timestamps: false
    }

    let Client = sequelize.define(alias, cols, config)

    Client.associate = function(models) {
        Client.belongs(models.Address, {
            as: "Endereço_Principal",
            foreignKey: "endereço_idEnderecoPrincipal"
        });
        
        Client.belongsToMany(models.Events, {
            as: "Eventos_Cliente",
            through: "TBClientes_has_events",
            foregnKey: "TBClientes_idClient",
            otherKey: "events_idEvento",
            timestamps: false
    });
            Client.belongs(models.Login, {
                as: "Login_Cliente",
                foreignKey: "idLogin"
            }),
            Client.belongs(models.Contacts, {
                as: "Contatos_Cliente",
                foreignKey: "contatos_id"
            })
    }

    return Client
}