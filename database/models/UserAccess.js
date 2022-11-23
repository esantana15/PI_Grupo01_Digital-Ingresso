module.exports = function(sequelize, DataTypes) {
    let alias = "UserAccess";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type: DataTypes.STRING
        },
        emailConfirm:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        passwordConfirm: {
            type: DataTypes.STRING
        },

        }
    let config = {
        tableName: "usuario_acessos",
        timestamps: false
    }

    let UserAccess = sequelize.define(alias, cols, config);


    UserAccess.sync({ alter: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return UserAccess;
}
