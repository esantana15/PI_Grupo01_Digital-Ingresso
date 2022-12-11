module.exports = function(sequelize, DataTypes) {
    let alias = "Payment";
    let cols = {
        idPayment:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type: DataTypes.STRING
        },
        numeroCartao: {
            type: DataTypes.STRING
        },
        vencimentoCartao: {
            type: DataTypes.STRING
        },
        cvcCartao: {
            type: DataTypes.INTEGER
        },
        nomeNoCartao: {
            type: DataTypes.STRING
        },
        ruaPagamento: {
            type: DataTypes.STRING
        },
        bairroPagamento: {
            type: DataTypes.STRING
        },
        cidadePagamento: {
            type: DataTypes.STRING
        },
        estadoPagamento: {
            type: DataTypes.STRING
        },
        paisPagamento: {
            type: DataTypes.STRING
        },
        valorTotal: {
            type: DataTypes.STRING
        },

        }
    let config = {
        tableName: "Payment",
        timestamps: false
    }

    let Payment = sequelize.define(alias, cols, config);




    // Payment.sync({ force: true }) // Essa clausula atualiza ou cria a tabela caso nao exista.
    return Payment;
}


