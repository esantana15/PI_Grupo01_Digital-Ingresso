const EventAddress = require("./EventAddress");
const eventos = {
    findAll: () => db.Events
}

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
        picture: DataTypes.STRING
        }
    let config = {
        tableName: "Events",
        timestamps: false
    }

    let Events = sequelize.define(alias, cols, config);


    Events.associate = models =>{
        Events.belongsToMany(models.EventAddress, { 
            through: 'EventsAddresses', 
            as: 'addressess'
        });
       }


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