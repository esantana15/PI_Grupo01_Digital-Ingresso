module.exports = function(sequelize, DataTypes) {
    let alias = "Events";
    let cols = {
        idEvento:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        evento:{
            type: DataTypes.STRING
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
        precoEvento: {
            type: DataTypes.STRING
        },
        fotoEvento: {
            type: DataTypes.STRING
        },
        }
    let config = {
        tableName: "Events",
        timestamps: false
    }

    let Events = sequelize.define(alias, cols, config);




    Events.sync({ alter: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return Events;
}





// module.exports = function (connection, DataTypes) {
//     const model = connection.define('Events', {
//         idEvento: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         evento: {
//             type: DataTypes.STRING
//         },
//         fotoEvento: {
//             type: DataTypes.STRING
//         }
//     }, {
//         timestamps: false,
//         tableName: 'Events'
//       })

//     // model.associate = function(models) {
//     //     model.belongs(models.Address, {
//     //         as: "Endereço_Principal",
//     //         foreignKey: "endereço_idEnderecoPrincipal"
//     //     });
        
//     //     model.belongsToMany(models.Events, {
//     //         as: "Eventos_Cliente",
//     //         through: "TBClientes_has_events",
//     //         foregnKey: "TBClientes_idClient",
//     //         otherKey: "events_idEvento",
//     //         timestamps: false
//     // });
//     //         Client.belongs(models.Login, {
//     //             as: "Login_Cliente",
//     //             foreignKey: "idLogin"
//     //         }),
//     //         Client.belongs(models.Contacts, {
//     //             as: "Contatos_Cliente",
//     //             foreignKey: "contatos_id"
//     //         })
//     // }
//     model.sync({ alter: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
//     return model
// }