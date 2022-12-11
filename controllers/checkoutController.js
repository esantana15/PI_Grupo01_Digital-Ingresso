const { where } = require('sequelize');
const db = require('../database/models');

const checkoutController = {

    create: (req, res) => {
        return res.render('checkout')
    },
    register:  (req, res) => {
        console.log(req.body),
        console.log('aqui')
        db.Payment.create({
            email: req.body.email,
            numeroCartao: req.body.numeroCartao,
            vencimentoCartao: req.body.vencimentoCartao,
            cvcCartao: req.body.cvcCartao,
            nomeNoCartao: req.body.nomeNoCartao,
            ruaPagamento: req.body.ruaPagamento,
            bairroPagamento: req.body.bairroPagamento,
            bairroPagamento: req.body.bairroPagamento,
            cidadePagamento: req.body.cidadePagamento,
            estadoPagamento: req.body.estadoPagamento,
            paisPagamento: req.body.paisPagamento,

        
        })
        
        return res.send('Dados enviados com sucesso. Aguarde uma confirmação por e-mail')
        .catch((error) => console.log(error))  

    },
}

module.exports = checkoutController;
