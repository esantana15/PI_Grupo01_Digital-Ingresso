const { Model } = require("sequelize")

module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
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
        email: {
            type: DataType.STRING,
            unique: true},

        emailConfirm:DataType.STRING,
        password:DataType.STRING,
        passwordConfirm:DataType.STRING,
        

        
        // fk_endereco: DataType.INTEGER,
        
    },{
        tableName: 'usuarios',
        timestamps: false
    })

    User.associate = (models) =>{
        User.hasMany(models.Address, {
            foreignKey: 'id_endereco',
            as: 'usuario_endereco'
        })
    }


    // User.sync({ force: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return User;
}