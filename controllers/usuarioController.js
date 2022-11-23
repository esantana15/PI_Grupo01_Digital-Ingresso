const { where } = require('sequelize');
const db = require('../database/models');
 

const usuarioController = {
    create: (req, res) => {
        return res.render('userRegister1')
    },
    createAddress: (req, res) => {
        return res.render('userRegister2')
    },
    createAccess: (req, res) => {
        return res.render('userRegister3')
    },
    

    register:  (req, res) => {
        console.log(req.body),
        db.UserRegister.create({
            nomeCompleto: req.body.nome,
            cpf: req.body.cpf,
            dataNascimento: req.body.data,
            sexo: req.body.sexo,
            fotoPerfil: req.file.filename,
            email: req.body.email,
            emailConfirm: req.body.emailConfirm,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm, 
                   
        })
        .then(() => res.redirect('/cadastro/create-address'))
        .catch((error) => console.log(error))  

    },

    registerAddress:  (req, res) => {

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
        .then(() => res.redirect('/cadastro/create-access'))
        .catch((error) => console.log(error))  
    },

    registerAccess:  (req, res) => {

        db.UserAccess.create({
            email: req.body.email,
            emailConfirm: req.body.emailConfirm,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,    
            
        })
        .catch((error) => console.log(error))  
        return res.send('Arquivo enviado com sucesso');

    },
    
}

module.exports = usuarioController;

