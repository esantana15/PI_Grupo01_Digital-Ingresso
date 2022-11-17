module.exports = function(sequelize, DataTypes) {
    let alias = "UserAddres";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rua:{
            type: DataTypes.STRING
        },
        numero:{
            type: DataTypes.INTEGER
        },
        complemento:{
            type: DataTypes.STRING
        },
        bairro: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.STRING
        },
        pais: {
            type: DataTypes.STRING
        },
        cep: {
            type: DataTypes.INTEGER
        },

        }
    let config = {
        tableName: "UserAddres",
        timestamps: false
    }

    let UserAddres = sequelize.define(alias, cols, config);


    UserAddres.sync({ alter: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return UserAddres;
}