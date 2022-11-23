const { where } = require('sequelize');
const db = require('../../database/models');
 

const registerUserController = {
    create: (req, res) => {
        return res.render('userRegister1')
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
        .then((req, res, next) => {
            const file = req.file
            if (!file) {
                return res.send('Envio de foto obrigatório');
            }
            return res.send('Evento cadastrado com sucesso!');  
        

        
        })
        .catch((error) => console.log(error))  
        .then(() => res.render('userRegister2'))
    },
    
}

module.exports = registerUserController;

