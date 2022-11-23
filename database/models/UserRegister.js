const { Model } = require("sequelize")

module.exports = (sequelize, DataType) => {
    const UserRegister = sequelize.define('UserRegister', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeCompleto: DataType.STRING,
        cpf: {
            type: DataType.STRING(50)
        },
        dataNascimento: {
            type: DataType.DATE
        },
        sexo:DataType.STRING,
        fotoPerfil: DataType.STRING,
        // email:DataType.STRING,
        // emailConfirm:DataType.STRING,
        // password:DataType.STRING,
        // passwordConfirm:DataType.STRING,
        

        
        // fk_endereco: DataType.INTEGER,
        
    },{
        tableName: 'usuarios_cadastro',
        timestamps: false
    })

    // UserRegister.associate = (models) =>{
    //     UserRegister.hasMany(models.UserAddress, {
    //         foreignKey: 'fk_endereco',
    //         as: 'usuario_endereco'
    //     })
    // }


    UserRegister.sync({ alter: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return UserRegister;
}