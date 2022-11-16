
module.exports = function (connection, DataTypes) {
    const model = connection.define('Address', {
        idEnderecoPrincipal: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        rua: {
            type: DataTypes.STRING
        },
        numero: {
            type: DataTypes.STRING
        },
        bairro: {
            type: DataTypes.STRING
        },
        cidade: {
            type: DataTypes.STRING
        },
        cep: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        tableName: 'Address'
      })

    // model.associate = function(models) {
    //     model.belongs(models.Address, {
    //         as: "Endereço_Principal",
    //         foreignKey: "endereço_idEnderecoPrincipal"
    //     });
        
    //     model.belongsToMany(models.Events, {
    //         as: "Eventos_Cliente",
    //         through: "TBClientes_has_events",
    //         foregnKey: "TBClientes_idClient",
    //         otherKey: "events_idEvento",
    //         timestamps: false
    // });
    //         Client.belongs(models.Login, {
    //             as: "Login_Cliente",
    //             foreignKey: "idLogin"
    //         }),
    //         Client.belongs(models.Contacts, {
    //             as: "Contatos_Cliente",
    //             foreignKey: "contatos_id"
    //         })
    // }
    model.sync({ alter: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return model
}