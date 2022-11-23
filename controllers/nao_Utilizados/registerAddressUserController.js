const { where } = require('sequelize');
const db = require('../database/models');
 

const registerAddressController = {
    createAddress: (req, res) => {
        return res.render('userRegister2')
    },

    registerAddress:  async (req, res) => {
        // const usuario_id = await UserRegister.findOne(
        //     {
        //         where: { cpf: req.body.cpf }
        //     })
        
        db.UserAddress.create({
            rua: req.body.rua,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            pais: req.body.pais,
            cep: req.body.cep,
        })        
        .catch((error) => console.log(error))  
        .then(() => res.redirect('/cadastro/create-access'))
    },
    
}

module.exports = registerAddressController;

