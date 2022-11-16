module.exports = function(sequelize, DataTypes) {
    let alias = "UserRegister";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeCompleto:{
            type: DataTypes.STRING
        },
        cpf:{
            type: DataTypes.INTEGER
        },
        dataNascimento:{
            type: DataTypes.STRING
        },
        sexo: {
            type: DataTypes.STRING
        },
        fotoPerfil: {
            type: DataTypes.STRING
        },
        }
    let config = {
        tableName: "UserRegister",
        timestamps: false
    }

    let UserRegister = sequelize.define(alias, cols, config);


    UserRegister.sync({ alter: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return UserRegister;
}
