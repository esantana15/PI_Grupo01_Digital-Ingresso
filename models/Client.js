
module.exports = function (connection, DataTypes) {
    const model = connection.define('Client', {
        idClient: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
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
            type: DataTypes.INTEGER
        },
        sexo: {
            type: DataTypes.STRING
        },
        foto: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        tableName: 'client'
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
    // model.sync({ alter: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return model
}